const { request, response } = require('express')
const express = require('express')
const app = express()
const port = 3008

const routes = require('./routes/index.js')
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(routes)

app.listen(port , ()=>{
  console.log(`listening in port ${port}`)
})