/*
    *Title: Main Index of this app
    *description: This application handle all of the route and server
    *Author: Md Abdullah Al shafi
    *Email:shafi29.dev.bd@gmail.com
    *Date: 07/10/2021
*/

// dependesis
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// express app initilization
const app = express();
app.use(express.json());
app.use(cors());


// Route Caller
const sliderRoute = require('./RoutHandler/slider')

// db Connection with mongoose
mongoose.connect('mongodb://localhost/osaris')
        .then(() => console.log('App is connected successfully'))
        .catch((err) => console.log(err));


// application Router 
app.use('/slider', sliderRoute)

// default error handler
function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

// PORT 
const PORT = 5000;

// server start
app.listen(PORT, () => {
    console.log(`the server is running on port number ${PORT}`)
});
