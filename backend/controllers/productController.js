const {Product} = require('../models/productModel')
exports.addProduct = async (req,res,next)=>{
    const {img,type,price,location,sqfeet,bhk,parking} = req.body //body-frontend
    const newProduct = new Product({   //Product-model name in productModel.js
        img,type,price,location,sqfeet,bhk,parking
    })
    if (img && type && price && location && sqfeet && bhk && parking){
       const addedProduct = await newProduct.save()
       res.json(addedProduct)
      // res.json({"message":"success",addedProduct})
    }
}

exports.getProduct = async (req,res,next)=>{
    const id = req.params.id;
    const query = req.query.location;

    const search = id ? {_id:id} : {location: {$regex:query, $options:'i' } }
    try{
        const returnedProduct = await Product.find(search)
        res.json(returnedProduct)
    }catch(err){
        console.log(err);
    }
}
exports.deleteProduct = async (req, res, next) => {
    const Id = req.params.Id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(Id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        console.log(err);
    }
};

exports.updateProduct = async(req, res, next) => {
    const id = req.params.id;
    const updateProductData = req.body
    try{
        const updateProduct = await Product.findByIdAndUpdate(id, updateProductData, { new: true });
        if(!updateProduct){
            return res.status(404).json({ message: "Product not found"})
        }
        res.json({ message: "Product update successfully", updateProduct })
    }
    catch(err){
        console.log(err);
    }
}

exports.addOwnerDetails = async(req,res,next)=>{
    const {name,phnoNumber,address} = req.body
    const newHouseOwner = new HouseOwner({
        name,phnoNumber,address
    })
    if(name && phnoNumber && address){
        const addedOwnerDetails = await newHouseOwner.save()
        res.json(addedOwnerDetails)
    }
}

exports.getOwnerDetails = async(req,res,next)=>{
    // const OwnerId = req.params.id;
    try{
        const getOwner = await HouseOwner.save()
        res.json(getOwner)
    }catch(err){
        console.log(err);
    }
   
}