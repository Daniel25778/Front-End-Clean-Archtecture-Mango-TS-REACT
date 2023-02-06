/* eslint-disable comma-dangle */
import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/http-response'
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import {
  HttpPostClient,
  HttpPostParams,
} from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  }

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
