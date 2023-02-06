export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  serverError = 404,
  unauthorized = 500,
}
export interface HttpResponse {
  statusCode: HttpStatusCode
  body?: any
}
