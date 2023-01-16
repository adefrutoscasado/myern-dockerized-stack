
export default class ApiError extends Error {
  constructor(message: string, status: number, additionalInfo?: object) {
    super()
    // @ts-ignore
    this.status = status || 500
    this.message = message || 'Internal Error'
    // @ts-ignore
    this.additionalInfo = additionalInfo || {}
    // Capturing stack trace, excluding constructor call from it.
    // Error.captureStackTrace(this, this.constructor)
  }
}