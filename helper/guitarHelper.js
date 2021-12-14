const express = require('express');
const fileUpload = require('express-fileupload');
const guitarSchema = require('../Schemas/guitarSchema');
const moongose = require('mongoose');
const guitarCategory = new moongose.model('guitar', guitarSchema);
var fs = require('fs');
const guitarHelper = async (req, res) => {
try{
    
        // file as a variable
            const fileOne = req.files.imageOne; //fileOne
            const fileTwo = req.files.imageTwo; //fileTwo
            const filethree = req.files.imageThree; //filethree
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
            const filePath1 = `${__dirname}/GuitarImages/${fileOne.name}`;
            const filePath2 = `${__dirname}/GuitarImages/${fileTwo.name}`;
            const filePath3 = `${__dirname}/GuitarImages/${filethree.name}`;
            
            
            console.log(filethree)

            // file moving
            fileOne.mv(filePath1, (err) => {
                if(err){
                    console.log('error to upload file');
                }
                else{
                    console.log('file Upload successfully1');
                }    
            });
            fileTwo.mv(filePath2, (err) => {
                if(err){
                    console.log('error to upload file');
                }
                else{
                    console.log('file Upload successfully2');
                }    
            });
            filethree.mv(filePath3, (err) => {
                if(err){
                    console.log('error to upload file');
                }
                else{
                    console.log('file Upload successfully3');
                }    
            });
            // function base64_encode(file) {
            //     const imageAsBase64 =  ;
            //     return imageAsBase64;
            // }
        
            const imageOne = fileOne.name;
            const imageTwo = fileTwo.name;
            const imageThree = fileTwo.name;
                    let newguitarCategory =  new guitarCategory({
                        title,
                        description,
                        pricing,
                        imageOne,
                        imageTwo,
                        imageThree,
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
                newguitarCategory.save((err) => {
                    if (err) {
                        res.status(500).json({err: "there was a server site error"});
                    } else {
                        res.status(200).json({message: "Post successfully"});
                    }
                })
            }
    
    
    catch{

    }
}

module.exports = guitarHelper;