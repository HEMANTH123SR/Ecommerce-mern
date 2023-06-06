const mongoose=require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your namee"],
  },
  description: {
    type: String,
    required: [true, "please enter the description"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category:{
    type:String,
    required:[true,'Please Enter Product Category']
  },
  Stock:{
    type:Number,
    required:[true,'plaese enter prodct stock'],
    maxLength:[4,"stock cannnot excced 4 characters"],
  },
  numOfReviews:{
    type:Number,
    default:0
  }
  ,
  reviews:[
    {
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
  ],createdAt:{
    type:Date,
    default:Date.now
  }
});


module.exports=mongoose.model("Product",productSchema);