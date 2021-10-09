const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    headingOne:{
        type:String,
        require: true
    },
    headingTwo:{
        type:String,
        require: true
    },
    headingThree:{
        type:String,
        require: true
    },
    file:{
        type:String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now,
    }
});

module.exports = categorySchema;
