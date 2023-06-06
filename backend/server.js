const app=require('./app')
const dotenv=require('dotenv')


// config

dotenv.config({path:'backend/config/config.env'})

// db

const connectDb = require("./config/database");


app.listen(process.env.PORT,()=>{
    console.log(`server  is working on
    http://localhost:${process.env.PORT}
    `)
})