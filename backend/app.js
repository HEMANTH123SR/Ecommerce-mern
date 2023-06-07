const express = require("express");
const errorMidleWare=require('./middleware/error')
const app = express();

app.use(express.json())

// route imports
const product=require('./routes/productRoute')

app.use('/api/v1/',product)


// middle ware for error

app.use(errorMidleWare)

module.exports = app;
