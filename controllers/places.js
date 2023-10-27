const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/kina-VUJPZXsepbA-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/pexels-atahan-demir-16255186.jpg'
      }]
      
    res.render('./places/index', {places})
})

router.get('/new', (req,res) => {
    res.render('places/new')
})

module.exports = router
