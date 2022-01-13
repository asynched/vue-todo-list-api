/**
 * @template HandlerReturnType Handler return type
 * @param { () => HandlerReturnType} handler Handler function
 * @returns { [Awaited<HandlerReturnType>, Error] } A tuple containing the data or error
 */
export const monadic = async (handler) => {
  try {
    return [await handler(), null]
  } catch (error) {
    return [null, error]
  }
}
