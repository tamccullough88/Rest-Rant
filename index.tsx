// load config
require('dotenv').config()

//grab the package
const express = require('express')

// create instance of the app
const app = express()

//method-override
const methodOverride = require('method-override')

//create home page route

app.set('views', __dirname + '/views')
app.set('view engine', 'tsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

// pull path from places.js
app.use('/places', require('./controllers/places_controller.js'))



//creating the paths/routes
app.get('/', (req, res) => {
    res.render('home')
})

//



// 404 page error for any page not found
app.get('*', (req, res) => {
    res.render('error404')
})

// listen for request
app.listen(process.env.PORT)