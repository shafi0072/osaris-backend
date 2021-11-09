const express = require('express');
const fileUpload = require('express-fileupload');
const builderSchema = require('../Schemas/builderSchema');
const moongose = require('mongoose');
const builder = new moongose.model('builder', builderSchema);
const builderHelper = (req, res) => {
    const file = req.files.file; //fileOne
    const bodySelecion = req.body.bodySelecion;
    const BodyConstruction = req.body.BodyConstruction;
    const BodyShapes = req.body.BodyShapes;
    const BodyCurves = req.body.BodyCurves;
    const BodyCavities = req.body.BodyBinding;
    const NeckSelecion = req.body.NeckSelecion;
    const ScaleLenths = req.body.ScaleLenths;
    const FretNumbers = req.body.FretNumbers;
    const FretboardRadius = req.body.FretboardRadius;
    const Inlays = req.body.Inlays;
    const InlayMaterial = req.body.InlayMaterial;
    const BodyNeckBinding = req.body.BodyNeckBinding;
    const Fretwires = req.body.Fretwires;
    const Paint = req.body.Paint;
    const Finish = req.body.Finish;
    const CustomShopFInish = req.body.CustomShopFInish;
    const TuningKeys = req.body.TuningKeys;
    const Nut = req.body.Nut;
    const Bridges = req.body.Bridges;
    const Pickups = req.body.Pickups;
    const Potentiometers = req.body.Potentiometers;
    const SelectorSwitches = req.body.SelectorSwitches;
    const OutputJacks = req.body.OutputJacks;
    const StrapPins = req.body.StrapPins;
    const Pickgaurds = req.body.Pickgaurds;
    const CustomGigBag = req.body.CustomGigBag;
    const CustomCase = req.body.CustomCase;
    const Strap = req.body.Strap;
    const Picks = req.body.Picks;
    const description = req.body.description;
    const pricing = req.body.pricing;
    const email = req.body.email;
    const filePath = `${__dirname}/Builder/${file.name}`;
    file.mv(filePath, (err) => {
        if(err){
            console.log('error to upload file');
        }
        else{
            console.log('file Upload successfully');
        }    
    });
    const newBuilder = new guitarCategory({
        file,
        bodySelecion,
        BodyConstruction,
        BodyShapes,
        BodyCurves,
        BodyCavities,
        NeckSelecion,
        ScaleLenths,
        FretNumbers,
        FretboardRadius,
        dimensions,
        electronics,
        fringerboard,
        frets,
        hardware,
        Inlays,
        InlayMaterial,
        BodyNeckBinding,
        Fretwires,
        Paint,
        Finish,
        CustomShopFInish,
        TuningKeys,
        Bridges,
        Pickups,
        Potentiometers,
        Nut,
        SelectorSwitches,
        OutputJacks,
        StrapPins,
        Pickgaurds,
        CustomGigBag,
        CustomCase,
        Strap,
        Picks,
        description,
        pricing,
        email
    });
    newBuilder.save((err) => {
        if (err) {
            res.status(500).json({err: "there was a server site error"});
        } else {
            res.status(200).json({message: "Post successfully"});
        }
    })

}

module.exports = builderHelper;