const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('./places/index', {places})
})



router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

router.get('/:id', (req,res) => {
    res.render('/places/:id')
})

router.put('/:id', (req,res) => {
    res.render('PUT /places/:id')
})

router.get('/:id/edit', (req,res) => {
    res.render('/places/:id/edit')
})

router.delete('/:id', (req,res) => {
    res.render('DELETE /places/:id')
})

router.post('/:id/rant', (req,res) => {
    res.render('POST /places/:id/rant')
})








module.exports = router
