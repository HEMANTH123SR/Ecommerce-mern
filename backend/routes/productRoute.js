const express=require('express')
const { getAllProduct ,createProduct} = require('../controller/productController')

const router=express.Router()

router.route('/product')
.get(getAllProduct)

router.route('/product/new').post(createProduct)

router.route('/product/:id',)

module.exports=router