const mongoose = require('mongoose')
// const mongooseUniqueValidator = require('mongoose-unique-validator')
const Person = require('./models/person')

/* eslint no-console: "off" */
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://vlxa:${password}@cluster0.n4wrf.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url)

// const personSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     minLength: 2,
//     required: true,
//     unique: true,
//   },
//   number: {
//     type: Number,
//     minLength: 7,
//   },
// })

// personSchema.plugin(mongooseUniqueValidator)

// const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({
    name,
    number,
  })
  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

if (!name && !number) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}
