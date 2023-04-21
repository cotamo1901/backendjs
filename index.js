const express = require("express")
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send("servidor")
})
app.get('/new-rute', (req, res) => {
  res.send("Hi, new route")
})

app.get('products', (req, res) => {
  res.json({
    name:'John',
    year:2023
  })
})

app.listen(port, () => {
  console.log('my port ' + port)
})
