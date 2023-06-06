const Product=require('../model/productModul')


//create product
exports.createProduct=async(req,res)=>{
    const product=await Product.create(req.body)

    res.status(201).json({
        success:true,
        product:product
    })
}

// get all products
exports.getAllProduct=async(req,res)=>{
   const product= await Product.find().sort({name:-1});
    res.status(200).json({
        success:true,
        product:product
    })
}


// update the product
exports.updateProduct=async(req,res,next)=>{
    let product=Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
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
      return  res.status(500).json({
            success:false,
            message:"product not found"
        })
      }

    await product.deleteOne({_id:req.params.id})

      res.status(200).json({
       success:true,
        message:"product deleted succesfully"
      })

}