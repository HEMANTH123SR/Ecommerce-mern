const express=require('express')
const { getAllProduct ,createProduct,updateProduct,deleteProduct} = require('../controller/productController')

const router=express.Router()

router.route('/product')
.get(getAllProduct)

router.route('/product/new').post(createProduct)

router.route('/product/:id')
.put(updateProduct)
.delete(deleteProduct)

module.exports=router