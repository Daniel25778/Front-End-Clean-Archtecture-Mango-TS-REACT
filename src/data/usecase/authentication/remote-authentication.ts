/* eslint-disable @typescript-eslint/indent */
import { AccountModel } from 'domain/models/account-model'
import { InvalidCredentialsError } from './../../../domain/errors/invalid-credential-error'
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import {
  Authentication,
  AuthenticationParams,
} from '@/domain/usecases/authentication'
import { UnexpectedError } from '@/domain/errors/unexpected-error'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
