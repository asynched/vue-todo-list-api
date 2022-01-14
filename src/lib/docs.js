import swaggerUI from 'swagger-ui-express'
import yaml from 'yamljs'

/**
 * Adds API docs for the application
 * @param { import('express').Express } app Express application
 */
const addDocsEndpoint = (app) => {
  const swaggerDocument = yaml.load('./swagger.yaml')

  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
}

export default addDocsEndpoint
