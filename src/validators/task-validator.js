import { isEmpty } from '@/utils'

export default class TaskValidator {
  /**
   * Validates the request body
   * @param { Object } body Request body
   * @returns { [boolean, string[]] } Tuple containing if the request is valid and the errors (if any).
   */
  static validate(body) {
    const errors = []

    if (isEmpty(body.title)) {
      errors.push('Title cannot be empty')
    }

    if (isEmpty(body.description)) {
      errors.push('Description cannot be empty')
    }

    return [isEmpty(errors), errors]
  }
}
