const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const productroute = require("./routes/productRoutes")
const app = express()
require('dotenv').config()

app.use(cors())                     //use-middleware (cor is also a midware)
app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`Running on a port ${process.env.PORT}`);
})

const mongoUrl = process.env.MONGOURL
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Connected to mongo");
})
.catch((err)=>{
    console.log(err);
})

app.use('/api',productroute)
