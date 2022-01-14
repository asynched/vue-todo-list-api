/**
 * @typedef ContextType
 *
 * @property { import('express').Request } request
 * @property { import('express').Response } response
 */

/**
 * @callback RequestHandlerCallback
 * @param { import('express').Request } request
 * @param { import('express').Response } response
 * @returns { any }
 */

/**
 * Binds the request and response values to an HTTP handler
 * @param { (context: ContextType) => any } handler Request handler
 * @returns { RequestHandlerCallback } A handler for the request
 */
export const bindContext = (handler) => {
  return (request, response) => handler({ request, response })
}
