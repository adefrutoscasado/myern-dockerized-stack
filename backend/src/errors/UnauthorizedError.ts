
import ApiError from './ApiError'

export default class UnauthorizedError extends ApiError {
  constructor(message?: string, additionalInfo?: object) {
    super(message || 'Unauthorized', 401, additionalInfo)
  }
}
