// load config
require('dotenv').config()

//grab the package
const express = require('express')

// create instance of the app
const app = express()

//create home page route
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// pull path from places.js
app.use('/places', require('./controllers/places.js'))

//creating the paths/routes
app.get('/', (req, res) => {
    res.render('home')
})



// 404 page error for any page not found
app.get('*', (req, res) => {
    res.render('error404')
})

// listen for request
app.listen(process.env.PORT)