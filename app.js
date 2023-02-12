const express = require('express')
const connectDB = require('./db.js')
const router = require('./routeandcontroller/route.js')

const app = express()
require('dotenv').config()


app.use(express.urlencoded({extended:false}))
app.use(express.json())

const start = async () =>{
    await connectDB(process.env.dbString)
    app.listen(5000,console.log("Server listening on port 5000..."))
}

app.use('/',router)

start()