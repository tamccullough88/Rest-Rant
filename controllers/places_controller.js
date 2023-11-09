const router = require('express').Router()
// const places = require('../models/places.js')
const db = require('../models')




//places index page
router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render('places/index', { places })
      })
      .catch( err => {
        console.log(err)
        res.render('error404')
      })
      })

//form page for new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

//create new place
router.post('/', (req, res) => {
  for (const [key, value] of Object.entries(req.body)) {
    if (!value) delete req.body[key]
  }
    db.Place.create(req.body)
      .then (() => {
        res.redirect('/places')
      })
      .catch(err => {
        console.log('err', err)
        res.render('error404')
      })
  })
  



//details showing a particular place
router.get('/:id', (req, res) => {

    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log("place and comments", place, place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// //update a particular place
router.put('/:id', async (req,res) => {
  await db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
  res.redirect(`/places/${req.params.id}`) 
})
 
  // let index = req.params.id
  // console.log(index)
  // let body = req.body
  // places[index] = body
  // res.redirect(`/places/${index}`)
//})



// //form page for editing a place
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)

  .then(place => {

    res.render('places/edit', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })

// console.log(index)
  })
  



// //create a rant
router.post('/:id/comment', (req, res) => {
  if (req.body.author === '') { req.body.author = undefined }
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})




//delete a particular place
router.delete('/:id', async (req,res) => {;
await db.Place.findByIdAndDelete(req.params.id);
res.redirect('/places')
console.log('deleted:', req.params.id)

})




module.exports = router
