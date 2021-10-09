/*
    *Title: category data 
    *description: this is the category data app
    *Author: Md Abdullah Al shafi
    *Email:shafi29.dev.bd@gmail.com
    *Date: 09/10/2021
*/

// dependesis
const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const categorySchema = require('../Schemas/categorySchema');
const Category = new mongoose.model('category', categorySchema);
const fileUpload = require('express-fileupload');
const router = require('./slider');

// middleWare
route.use(fileUpload());

// router status
// get
route.get('/', (req, res) => {
    Category.find((err, data) => {
        if (err) {
            res.status(500).json({err: "there was a server site error1"});
        } else {
           res.status(200).json(data)
        }
    })
});
// get by id
route.get('/:id', (req, res) => {
    Category.find({_id:req.params.id},(err, data) => {
        if (err) {
            res.status(500).json({err: "there was a server site error1"});
        } else {
           res.status(200).json(data)
        }
    })
});
// post
route.post('/', (req, res) => {
     // file as a variable
     const fileUpload = req.files.file;
     const headingOne = req.body.headingOne;
     const headingTwo = req.body.headingTwo;
     const headingThree = req.body.headingThree;
     const file = fileUpload.name;

     const filePath = `${__dirname}/public/${fileUpload.name}`;
        fileUpload.mv(filePath, (err) => {
            if(err){
                console.log('error to upload file');
            }
            else{
                console.log('file Upload successfully');
            }    
        });
        const newCategory = new Category({
            headingOne,
            headingTwo,
            headingThree,
            file,
        });
        newCategory.save((err) => {
            if (err) {
                res.status(500).json({err: "there was a server site error"});
            } else {
                res.status(200).json({message: "Post successfully"});
            }
        })
        
});
// put
route.put('/:id', (req, res) => {
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
// delete
route.delete('/:id', (req, res) => {
    Category.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.status(500).json({error: "failded to delete"});
        }
        else{
            res.status(200).json({message: "delete successfully"});
        }
    })
});

// export 
module.exports = route;


