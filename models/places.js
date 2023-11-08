const mongoose = require('mongoose')

const { Schema } = mongoose 

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type:String, default: "http://placekitten.com/350/350"},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
    type: Number,
    min: [1776, "Yay America, but this restaurant isn't that old, is it?"],
    max:[new Date().getFullYear(), "It's it's not open yet, you can't possibly know how it is!"]
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref :'Comment'}]
})

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)


