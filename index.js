require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('post-body', (req, res) => {
  return req.method === 'POST' || 'PUT' ? JSON.stringify(req.body) : null
})

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :post-body'
  )
)

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
  const date = new Date()
  const numEntries = persons.length
  const message = `<h3>Phonebook has info for ${numEntries} people</h3><p>${date}</p>`

  response.send(message)
})

app.get('/api/persons/:id', (request, response) => {
  const id = +request.params.id
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.statusMessage = `Person "${id}" does not exist.`
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => String(person.id) !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === '' || body.number === '') {
    return response.status(400).json({ error: 'content missing' })
  }

  //if (persons.find(person => person.name === body.name)) {
  //  return response.status(400).json({ error: 'name must be unique' })
  //}

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => response.json(savedPerson))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
