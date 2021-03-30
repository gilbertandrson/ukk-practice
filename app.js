const { request, response } = require('express')
const express = require('express')
const app = express()
const port = 3008

app.get('/', (requset, response) => {
    response.send('routes pertamaku')
  })
app.get('/:id',(requset, response) => {
    response.send(`param pertamaku ${requset.params.id}`)
})

app.get('/admin/:home', (request,response) => {
    response.send(`halaman pertama ${request.params.home}`)
})
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
