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
const sliderSchema = require('../Schemas/sliderSchema');
const moongose = require('mongoose');
const Category = new moongose.model('slider', sliderSchema);
const fileUpload = require('express-fileupload');

// middleware
router.use(fileUpload());

// route worker
// get route
router.get('/', (req, res) => {
       Category.find((err, data) => {
            if (err) {
                res.status(500).json({err: "there was a server site error1"});
            } else {
               res.status(200).json(data);
            }
        })
        
   
    
});
// get by id
router.get('/:id', (req, res) => {
    Category.find({_id: req.params.id}, (err, data) => {
        if (err) {
            res.status(500).json({err: "there was a server site error1"});
        } else {
           res.status(200).json(data)
        }
    })
});

// post route
router.post('/', async (req, res) => {
    // file as a variable
        const fileUpload = req.files.file;
        const title = req.body.title;
        const description = req.body.description;
        const pricing = req.body.pricing;
        const file = fileUpload.name;
        const cat = req.body.cat;
        const link = req.body.link;

        const filePath = `${__dirname}/public/${fileUpload.name}.png`;
        fileUpload.mv(filePath, (err) => {
            if(err){
                console.log('error to upload file');
            }
            else{
                console.log('file Upload successfully');
            }    
        })

        
        const newCategory = new Category({
            title,
            description,
            pricing,
            file,
            cat,
            link
        });
        newCategory.save((err) => {
            if (err) {
                res.status(500).json({err: "there was a server site error"});
            } else {
                res.status(200).json({message: "Post successfully"});
            }
        })
    
   

});

// updateRoute
router.put('/:id', (req, res) => {
   Category.updateOne({_id: req.params.id}, {
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
   Category.deleteOne({_id: req.params.id}, (err) => {
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

