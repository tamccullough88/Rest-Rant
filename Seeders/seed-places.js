const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'images/kina-VUJPZXsepbA-unsplash.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/pexels-atahan-demir-16255186.jpg',
    rants: 'cute cats all over',
    founded: 2020
},
{
    name: 'Coding Cafe',
    city: 'Phnix',
    state: 'AZ',
    cuisines: 'Coffee',
    pic: '/images/pexels-atahan-demir-16255186.jpg',
    rants: 'cute cats all over',
    founded: 2023
}])
.then(() =>{
    console.log('success')
    process.exit()
})
.catch(() => {
    console.log('failure', err)
    process.exit
})