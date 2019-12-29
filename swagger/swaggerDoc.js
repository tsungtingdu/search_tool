const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    info: {
      title: "Search Tool APIs",
      version: '1.0.0',
      description: "Search Tool APIs"
    },
    // host: process.env.API_SERVER_FOR_SWAGGER,
    // explorer: true,
  },
  apis: ['./swagger/doc/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

const DisableTryItOutPlugin = function () {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => true
        }
      }
    }
  }
}

const DisableAuthorizePlugin = function () {
  return {
    wrapComponents: {
      authorizeBtn: () => () => false
    }
  }
}

const DisableTopbarPlugin = function () {
  return {
    wrapComponents: {
      Topbar: () => () => false
    }
  }
}

const swaggerOptions = {
  swaggerOptions: {
    plugins: [
      DisableTryItOutPlugin,
      DisableAuthorizePlugin,
      DisableTopbarPlugin
    ],
  }
}

module.exports = app => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions))
}