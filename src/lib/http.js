/**
 * @typedef ContextType
 *
 * @property { import('express').Request } request
 * @property { import('express').Response } response
 */

export const bindContext = (handler) => {
  return (request, response) => handler({ request, response })
}
