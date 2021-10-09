const mongoose = require('mongoose');

const guitarSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:String,
    pricing:Number,
    imageOne:String,
    imageTwo:String,
    imageThree:String,
    body:{
        type:String,
        require:true
    },
    bridge:{
        type:String,
        require:true
    },
    dimensions:{
        type:String,
        require:true
    },
    electronics:{
        type:String,
        require:true
    },
    fringerboard:{
        type:String,
        require:true
    },
    frets:{
        type:String,
        require:true
    },
    hardware:{
        type:String,
        require:true
    },
    inlys:{
        type:String,
        require:true
    },
    neck:{
        type:String,
        require:true
    },
    neckWidth:{
        type:String,
        require:true
    },
    notes:{
        type:String,
        require:true
    },
    pickups:{
        type:String,
        require:true
    },
    scaleLength:{
        type:String,
        require:true
    },
    strings:{
        type:String,
        require:true
    },
    tuners:{
        type:String,
        require:true
    },
    weight:{
        type:String,
        require:true
    },
    cat:{
        type:String,
        require: true
    },
    youtubeLink:String,
    
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = guitarSchema;
