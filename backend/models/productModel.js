const mongoose = require("mongoose")
//schema 👇
const productSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    sqfeet:{
        type:Number,
        required:true
    },
    bhk:{
        type:Number,
        required:true
    },
    parking:{
        type:String,
        required:true
    }
    
}) 
// const houseOwnerSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true
//     },
//     phoneNumber:{
//         type:Number,
//         require:true
//     },
//     address:{
//         type:String,
//         require:true
//     }
// })


//creating model using schema....👇
exports.Product = mongoose.model('Product',productSchema)
// exports.HouseOwner = mongoose.model('HouseOwner',houseOwnerSchema)
