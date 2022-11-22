const express = require('express')
const port = 8080

const app = express()

app.get('/produtos', (req, res, next) => {
  res.send([
    { nome: 'Notebook', preco: 123.32 },
    { iphone: 'Iphone', preco: 400.00 }
  ])
});

app.listen(port, () => {
  console.log('listening on port ' + port)
});
