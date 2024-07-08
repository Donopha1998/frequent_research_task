require('dotenv').config();
const express = require('express')
const app =express()
const connectDB = require('./config/db')
const coutryRouter = require('./routes/country')
const userRouter = require('./routes/user')
const cors = require('cors')

app.use(cors({
   origin:'*',
   credentials:true
}))

connectDB()

app.use(express.json())

app.use('/api/v1/country',coutryRouter)
app.use('/api/v1/user',userRouter)

port = process.env.PORT || 3004


app.listen(port,()=>{
   console.log( `app running on ${port}`)
})