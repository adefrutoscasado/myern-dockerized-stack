
import ApiError from './ApiError'

export default class InternalError extends ApiError {
  constructor(message: string) {
    super(message || 'Internal Error', 500)
  }
}
