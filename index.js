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
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
  const date = new Date()
  const numEntries = persons.length
  const message = `<h3>Phonebook has info for ${numEntries} people</h3><p>${date}</p>`

  response.send(message)
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === '' || body.number === '') {
    return response.status(400).json({error: 'content missing'})
  }

  //if (persons.find(person => person.name === body.name)) {
  //  return response.status(400).json({ error: 'name must be unique' })
  //}

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then((savedPerson) => response.json(savedPerson))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, note, {new: true})
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((error) => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({error: 'malformatted id'})
  }

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
