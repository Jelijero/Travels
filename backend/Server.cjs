const mongoose=require('mongoose')
const express=require('express')
const app=express()
const routeUrls=require('./routes/routes.cjs')
const cors=require('cors')
const dotenv=require('dotenv')

dotenv.config()

mongoose.connect('mongodb+srv://agdeveloperss:AG12345@cluster0.zjfpuve.mongodb.net/VigneshwaranTravels?retryWrites=true&w=majority')
app.use(cors())
app.use("/app",routeUrls)




app.listen(process.env.PORT || 3001,console.log('server  is up'))