const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url) // eslint-disable-line no-console

mongoose
  .connect(url)
  .then(() => {
    console.log('connected to MongoDB') // eslint-disable-line no-console
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message) // eslint-disable-line no-console
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    minLength: 7,
  },
})

personSchema.plugin(mongooseUniqueValidator)
/* eslint no-underscore-dangle: "off" */
/* eslint no-param-reassign: "off" */
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
