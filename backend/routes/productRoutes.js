const express = require("express")
const { addProduct, getProduct, deleteProduct, updateProduct} = require("../controllers/productController")
const router = express.Router()

router.route('/addProduct').post(addProduct)
router.route('/getProduct/:id').get(getProduct)
router.route('/getProduct').get(getProduct)
router.route('/:Id').delete(deleteProduct)
router.route('/updateProduct/:id').put(updateProduct)

// router.route('/addOwnerDetails').post(addOwnerDetails)
// router.route('/getOwnerDetails').get(getOwnerDetails)
module.exports = router





