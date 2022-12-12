const express = require("express")
const mongoose = require("mongoose")
const { errorHandler } = require("./src/middleware/errorHandler")
const route = require("./src/routes/route")
const app = express()

app.use(express.json())
app.use("/",route)
app.use(errorHandler)

mongoose.connect("mongodb+srv://group22:1234@group22databse.uvtoalh.mongodb.net/goldenKartDB",{useNewUrlParser:true})

const PORT = 7777

app.listen(PORT, ()=>{
    console.log(`Your app is currently running on Port ${PORT}`)
})