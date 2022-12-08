const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const { errorHandler } = require('./middleware/errorMiddleware')
const { connectDB } = require('./config/db')

connectDB()


const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server running on localhost:${port}`)
})
