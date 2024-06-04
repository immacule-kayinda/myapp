const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./home.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve('./contact.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve('./about.html'))
})

app.get('/*', (req, res) => { res.sendFile(path.resolve('./error.html')) })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

