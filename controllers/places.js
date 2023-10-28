const router = require('express').Router()
const places = require('../models/places.js')




//places index page
router.get('/', (req, res) => {
    res.render('./places/index', {places})
})


// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//       res.render('places/show', { place: places[id] })
//     }
//   })

//create new place
router.post('/', (req, res) => {
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
  

//form page for new place
router.get('/new', (req, res) => {
    res.render('places/new')
})

//details showing a particular place
router.get('/:arrayIndex', (req, res) => {
    if (places[req.params.arrayIndex]) {
        res.render('./places/Show', {
        place: places[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })
} else {
        res.render('error404')
    }
})

//update a particular place
router.put('/:id', (req,res) => {
    res.render('PUT /places/:id')
})

//form page for editing a place
router.get('/:id/edit', (req,res) => {
    res.render('/places/:id/edit')
})

//delete a particular place
router.delete('/:id', (req,res) => {
    res.render('DELETE /places/:id')
})

//create a rant
router.post('/:id/rant', (req,res) => {
    res.render('POST /places/:id/rant')
})








module.exports = router
