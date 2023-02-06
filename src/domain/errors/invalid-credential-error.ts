/* eslint-disable space-before-function-paren */
export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais inválidas')
    this.name = 'InavalidCredentialsError'
  }
}
