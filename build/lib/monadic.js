"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * @template HandlerReturnType Handler return type
 * @param { () => HandlerReturnType} handler Handler function
 * @returns { Promise<[Awaited<HandlerReturnType>, Error]> } A tuple containing the data or error
 */
 const monadic = async (handler) => {
  try {
    return [await handler(), null]
  } catch (error) {
    return [null, error]
  }
}; exports.monadic = monadic
