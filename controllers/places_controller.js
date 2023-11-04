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
router.get('/:index', (req, res) => {
  db.Place.findById(req.params.index)
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// //update a particular place
// router.put('/:index', (req,res) => {
 
//   let index = req.params.index
//   console.log(index)
//   let body = req.body
//   places[index] = body
//   res.redirect(`/places/${index}`)
// })



// //form page for editing a place
// router.get('/:index/edit', (req, res) => {
//   const index = req.params.index
//     if (places[index]) {
//         res.render('places/edit', {
//         place: places[index],
//         index,
//     })
// }
// console.log(index)
//   })
  



// //create a rant
// router.post('/:arrayIndex/rant', (req,res) => {
//     res.render('POST /places/:id/rant')
// })



// //delete a particular place
// router.delete('/:index', (req,res) => {
//     // console.log(req.params.index);
//     const index = req.params.index;
//     places.splice(index, 1);
//     res.redirect('/places');
// })




module.exports = router
