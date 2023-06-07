const app = require('../app');
const ErrorHandler=require('../utils/errorHandler')

module.exports=(err,res,req,next)=>{
    err.statusCode = err.statusCode||5000;
    err.message=err.message||"internal server error";
    res.status(err.exports).json({
        success:false,
        error:err
    })
}


module.exports=app