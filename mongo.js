const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

console.log(password, name, number)

const url = `mongodb+srv://vlxa:${password}@cluster0.n4wrf.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({
    name,
    number,
  })
  person.save().then((result) => {
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
