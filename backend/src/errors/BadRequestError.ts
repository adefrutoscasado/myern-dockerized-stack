
import ApiError from './ApiError'

export default class NotFoundError extends ApiError {
  constructor(message?: string, additionalInfo?: object) {
    super(message || 'Bad Request', 400, additionalInfo)
  }
}
