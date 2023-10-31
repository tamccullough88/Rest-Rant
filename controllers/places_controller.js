const router = require('express').Router()
const places = require('../models/places.js')




//places index page
router.get('/', (req, res) => {
    res.render('./places/Index', {places})
})

//form page for new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

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
  



//details showing a particular place
router.get('/:index', (req, res) => {
    console.log(places, req.params.index)
    const index = req.params.index
    if (places[index]) {
        res.render('places/Show', {
        place: places[index],
        index,
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
router.get('/:index/edit', (req, res) => {
   const index = req.params.index
    if (places[index]) {
        res.render('places/edit', {
        place: places[index],
        index,
    })
} else {
        res.render('error404')
    }
  })
  



//create a rant
router.post('/:arrayIndex/rant', (req,res) => {
    res.render('POST /places/:id/rant')
})



//delete a particular place
router.delete('/:index', (req,res) => {
    // console.log(req.params.index);
    const index = req.params.index;
    places.splice(index, 1);
    res.redirect('/places');
})




module.exports = router
