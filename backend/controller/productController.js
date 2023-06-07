const Product=require('../model/productModul')
const ErrorHandler = require('../utils/errorHandler')
const EroorHandler=require('../utils/errorHandler')

//create product
exports.createProduct=async(req,res)=>{
    const product=await Product.create(req.body)
if(!product){
  return next(new ErrorHandler("data not created pls try again ", 404));
}
    res.status(201).json({
        success:true,
        product:product
    })
}

// get all products
exports.getAllProduct=async(req,res)=>{
   const product= await Product.find().sort({name:-1});
   if(!product){
    return next(new ErrorHandler("sorry that didnt worked", 404));
   }
    res.status(200).json({
        success:true,
        product:product
    })
}


// get a product details
exports.getProductDetails=async(req,res,next)=>{
   
  let product =await Product.findById(req.params.id);

  if (!product) {
    return next(new EroorHandler("Product not found",404))
  }

      res.status(200).json({
        success: true,
        product:product
      });

}


// update the product
exports.updateProduct=async(req,res,next)=>{
    let product=Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("wrong ID from the user",404))
        }
    
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
      useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        product:product
    })
}
// delete product
exports.deleteProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
      if(!product){
      return next(new ErrorHandler("wrong ID from the user", 404));
      }

    await product.deleteOne({_id:req.params.id})

      res.status(200).json({
       success:true,
        message:"product deleted succesfully"
      })

}

//