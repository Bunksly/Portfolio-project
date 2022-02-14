const express = require('express')
const { getTopics } = require('./controllers/get-controllers')
const { pathNotFoundErr, errorHandler } = require('./controllers/error-controllers')

const app = express()

app.get('/api/topics', getTopics)

app.all('/*', pathNotFoundErr)

app.use(errorHandler)

module.exports = app