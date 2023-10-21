// load config
require('dotenv').config()

//grab the package
const express = require('express')

// create instance of the app
const app = express()


//creating the paths/routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// pull path from places.js
app.use('/places', require('./controllers/places'))

// 404 page error for any page not found
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// listen for request
app.listen(process.env.PORT)