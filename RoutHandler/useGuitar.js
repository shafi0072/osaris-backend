/*
    *Title: slider data 
    *description: this is the slider data app
    *Author: Md Abdullah Al shafi
    *Email:shafi29.dev.bd@gmail.com
    *Date: 07/10/2021
*/

// dependesis
const express = require('express');
const router = express.Router();
const guitarSchema = require('../Schemas/guitarSchema');
const moongose = require('mongoose');
const guitarCategory = new moongose.model('usedGuitar', guitarSchema);

const fileUpload = require('express-fileupload');
const guitarHelper = require('../helper/usedGuitarHelper')
// middleware
router.use(fileUpload());

// route worker
// get route
router.get('/', (req, res) => {
       guitarCategory.find((err, data) => {
            if (err) {
                res.status(500).json({err: "there was a server site error1"});
            } else {
               res.status(200).json(data);
            }
        })
});
// get by id
router.get('/:id', (req, res) => {
    guitarCategory.find({_id: req.params.id}, (err, data) => {
        if (err) {
            res.status(500).json({err: "there was a server site error1"});
        } else {
           res.status(200).json(data)
        }
    })
});

// post route
router.post('/', guitarHelper);

// updateRoute
router.put('/:id', (req, res) => {
   guitarCategory.updateOne({_id: req.params.id}, {
        $set:req.body
    }, (err) => {
        if(err){
            res.status(500).json({error: "there was a server site error"});
        }
        else{
            res.status(200).json({
                message: "Post Was updated successfully"
            })
        }
    })
});


// Delete Route
router.delete('/:id',  (req, res) => {
   guitarCategory.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.status(500).json({error: "failded to delete"});
        }
        else{
            res.status(200).json({message: "delete successfully"});
        }
    })
})


// route export
module.exports = router;

