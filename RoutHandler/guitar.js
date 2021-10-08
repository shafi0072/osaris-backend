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
const Category = new moongose.model('guitar', guitarSchema);
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
        const imageOne = req.files.imageOne;
        const imageTwo = req.files.imageTwo;
        const imageThree = req.files.imageThree;
        const title = req.body.title;
        const description = req.body.description;
        const pricing = req.body.pricing;
        const cat = req.body.cat;
        const link = req.body.link;
        const body = req.body.body;
        const bridge = req.body.bridge;
        const dimensions = req.body.dimensions;
        const electronics = req.body.electronics;
        const fringerboard = req.body.fringerboard;
        const frets = req.body.frets;
        const hardware = req.body.hardware;
        const inlys = req.body.inlys;
        const neck = req.body.neck;
        const notes = req.body.notes;
        const pickups = req.body.pickups;
        const scaleLength = req.body.scaleLength;
        const tuners = req.body.tuners;
        const strings = req.body.strings;
        const weight = req.body.weight;
        const youtubeLink = req.body.youtubeLink;
        const imageOneName = imageOne.name;
        const imageTwoName = imageTwo.name;
        const imageThreeName = imageThree.name;

        const filePath1 = `${__dirname}/public/${imageOne.name}`;
        const filePath2 = `${__dirname}/public/${imageTwo.name}`;
        const filePath3 = `${__dirname}/public/${imageThree.name}`;
        console.log(imageOne.name)
        console.log(imageTwo.name)
        console.log(imageThree.name)
        // file moving
        imageOne.mv(filePath1, (err) => {
            if(err){
                console.log('error to upload file');
            }
            else{
                console.log('file Upload successfully');
            }    
        });
        imageTwo.mv(filePath2, (err) => {
            if(err){
                console.log('error to upload file');
            }
            else{
                console.log('file Upload successfully');
            }    
        });
        imageThree.mv(filePath3, (err) => {
            if(err){
                console.log('error to upload file');
            }
            else{
                console.log('file Upload successfully');
            }    
        });
        

        
        const newCategory = new Category({
            title,
            description,
            pricing,
            imageOneName,
            imageTwoName,
            imageThreeName,
            cat,
            link,
            body,
            bridge,
            dimensions,
            electronics,
            fringerboard,
            frets,
            hardware,
            inlys,
            neck,
            notes,
            pickups,
            scaleLength,
            tuners,
            strings,
            weight,
            youtubeLink
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

