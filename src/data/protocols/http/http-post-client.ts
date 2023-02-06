/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>
}
