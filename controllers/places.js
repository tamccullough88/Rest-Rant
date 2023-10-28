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



router.post('/', (req,res) => {
    console.log(req.body)
    res.send('POST /places')
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
