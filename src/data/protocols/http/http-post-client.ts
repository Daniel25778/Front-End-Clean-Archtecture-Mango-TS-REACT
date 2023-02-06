import { HttpResponse } from './http-response'
/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
