// dependesi
const { response } = require('express');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const artistSchema = require('../Schemas/artist');

const artist = new mongoose.model('artist', artistSchema);

router.post('/', (req, res) => {
    const file = req.files.file;
    const name = req.body.name;
    const type = req.body.type;
    const facebook = req.body.facebook;
    const insta = req.body.insta;
    const twitter = req.body.twitter;

    const newArtist = new artist({
        name,
        type,
        facebook,
        insta,
        twitter,
        file
    });
    newArtist.save((err) => {
        if(err){
            res.status(500).json({err: "there was a server site error"});
        }
        else {
            res.status(200).json({message: "Post successfully"});
        }
    })

});

router.get('/', (req, res) => {
    
    artist.find((err, data) => {
        if(err){
            res.status(500).json({
                error: "there was a server site error"
            })

        }
        else{
            res.status(200).json({
                result: data,
                message: "Todo Was find successfully"
            })
        }
    })
});

router.delete('/:id', (req, res) => {

})
// export router 

module.exports = router;