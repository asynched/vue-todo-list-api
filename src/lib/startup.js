const startApp = async (app, port, ...callbacks) => {
  await Promise.all(callbacks.map((callback) => callback()))

  app.listen(port, () => console.log(`Server started on port ':${port}'. 🔥`))
}

export default startApp
