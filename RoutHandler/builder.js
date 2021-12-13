/*
    *Title: slider data 
    *description: this is the slider data app
    *Author: Md Abdullah Al shafi
    *Email:shafi29.dev.bd@gmail.com
    *Date: 09/11/2021
*/
// dependesis
const express = require('express');
const fileUpload = require('express-fileupload');
const builderSchema = require('../Schemas/builderSchema');
const moongose = require('mongoose');
const builder = new moongose.model('builder', builderSchema);
const router = express.Router();
const builderHelper = require('../helper/builderHelper');

// middleware
router.use(fileUpload());

// routHandler
// getrouters

router.post('/', builderHelper);
router.get('/',(req, res) => {
    builder.find((err, data) => {
        if(err){
            res.status(500).json({err: "there was a server site error1"});
        }else{
            res.status(200).json(data);
        }
    })
});

router.get('/:id', (req, res) => {
    builder.find({_id: req.params.id},(err, data) => {
        if(err){
            res.status(500).json({err: "there was a server site error1"});
        }else{
            res.status(200).json(data);
        }
    })
});
router.put((req, res) => {

});
router.delete('/:id',(req, res) => {
    builder.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.status(500).json({error: "failded to delete"});
        }
        else{
            res.status(200).json({message: "delete successfully"});
        }
    })
});

module.exports = router;