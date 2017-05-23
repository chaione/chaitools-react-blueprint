const express = require('express')
const compression = require('compression')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
// const bodyParser = require('body-parser')
// const qs = require('querystring')

const ONE_DAY = 86400000

app.use(compression())

// In case for some 3rd party service callback
// Which requires a POST endpoint
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.static(__dirname + '/', { maxAge: ONE_DAY }))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port)
console.log('server started on port ' + port)
