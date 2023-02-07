import axios from 'axios'
/* eslint-disable space-before-function-paren */
import { HttpPostParams } from '@/data/protocols/http'
export class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
}
