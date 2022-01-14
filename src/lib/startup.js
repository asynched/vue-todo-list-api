/**
 * Starts the application
 * @param { import('express').Express } app Express application
 * @param { number | string } port Port for the app to run on
 * @param { ...() => Promise<any> } callbacks Optional callbacks to await before the server starts
 */
const startApp = async (app, port, ...callbacks) => {
  await Promise.all(callbacks.map((callback) => callback()))

  app.listen(port, () => console.log(`Server started on port ':${port}'. 🔥`))
}

export default startApp
