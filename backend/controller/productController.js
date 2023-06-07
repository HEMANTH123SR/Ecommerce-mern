const Product=require('../model/productModul')
const ErrorHandler = require('../utils/errorHandler')


const catchAsyncError = require('../middleware/catchAsyncError')
//create product
exports.createProduct=catchAsyncError( async(req,res)=>{
    const product=await Product.create(req.body)
    console.log(product)
if(!product){
  return next(new ErrorHandler("data not created pls try again ", 404));
}
    res.status(201).json({
        success:true,
        product:product
    })
})

// get all products
exports.getAllProduct=catchAsyncError(async(req,res)=>{
   const product= await Product.find().sort({name:-1});
   if(!product){
    return next(new ErrorHandler("sorry that didnt worked", 404));
   }
    res.status(200).json({
        success:true,
        product:product
    })
})


// get a product details
exports.getProductDetails=catchAsyncError(async(req,res,next)=>{
   
  let product =await Product.findById(req.params.id);


  if (!product) {
    // handling error from creating a class
    return next(new EroorHandler("Product not found",404))
  }

      res.status(200).json({
        success: true,
        product:product
      });
})


// update the product
exports.updateProduct=catchAsyncError(async(req,res,next)=>{
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
})
// delete product
exports.deleteProduct=catchAsyncError(async(req,res,next)=>{
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
)
//