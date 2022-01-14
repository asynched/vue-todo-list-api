"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * @typedef ContextType
 *
 * @property { import('express').Request } request
 * @property { import('express').Response } response
 */

 const bindContext = (handler) => {
  return (request, response) => handler({ request, response })
}; exports.bindContext = bindContext
