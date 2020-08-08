import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  const users = [
    { name: 'Charles', age: 51 },
    { name: 'Pedro', age: 42 }
  ]
  return response.json(users)
})

app.listen(3333)