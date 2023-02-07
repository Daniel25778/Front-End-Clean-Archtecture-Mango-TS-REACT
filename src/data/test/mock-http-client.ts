/* eslint-disable comma-dangle */
import {
  HttpResponse,
  HttpStatusCode,
  HttpPostClient,
  HttpPostParams,
} from '@/data/protocols/http'
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
