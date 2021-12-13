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
const fileUpload = require('express-fileupload');

// express app initilization
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./RoutHandler/public'));
app.use(express.static('./helper/GuitarImages'));
app.use(express.static('./helper/Builder'));

// Route Caller
const sliderRoute = require('./RoutHandler/slider');
const guitar = require('./RoutHandler/guitar');
const category = require('./RoutHandler/category');
const userdGuitar = require('./RoutHandler/useGuitar');
const builder = require('./RoutHandler/builder');
const blog = require('./RoutHandler/blog');

// db Connection with mongoose
mongoose.connect('mongodb+srv://shafi:safi123456789@cluster0.dpegg.mongodb.net/osaris?retryWrites=true&w=majority')
        .then(() => console.log('App is connected successfully'))
        .catch((err) => console.log(err));


// application Router 
app.use('/slider', sliderRoute);
app.use('/guitar', guitar);
app.use('/category', category);
app.use('/usedGuitar',userdGuitar);
app.use('/builder', builder);
app.use('/blog', blog)

// default error handler
function errorHandler (err, req, res, next){
    if(req.headerSent){
        return next(err)
    }
    res.status(500).json({error: err});
}

// PORT 
const PORT = 5000;

// server start
app.listen(process.env.PORT || PORT, () => {
    console.log(`the server is running on port number ${PORT}`)
});
