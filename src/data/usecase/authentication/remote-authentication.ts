/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
    })
  }
}
