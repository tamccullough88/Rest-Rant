const mongoose = require('mongoose')

const { Schema } = mongoose 

const placeSchema = new Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [
//     {
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'images/kina-VUJPZXsepbA-unsplash.jpg',
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/pexels-atahan-demir-16255186.jpg',
//     rants: 'cute cats all over'
// },
// {
//     name: 'Coding Cafe',
//     city: 'Phnix',
//     state: 'AZ',
//     cuisines: 'Coffee',
//     pic: '/images/pexels-atahan-demir-16255186.jpg',
//     rants: 'cute cats all over'
// }
// ]