const express = require('express');
const fileUpload = require('express-fileupload');
const builderSchema = require('../Schemas/builderSchema');
const moongose = require('mongoose');
const builder = new moongose.model('builder', builderSchema);
const builderHelper = (req, res) => {
    
    const WoodSelection = req.body.WoodSelection;
    const BodyConstruction = req.body.BodyConstruction;
    const BodyShapes = req.body.BodyShapes;
    const BodyCurves = req.body.BodyCurves;
    const BodyCavities = req.body.BodyBinding;
    const BodyBinding = req.body.BodyBinding;
    const NeckWoodSelection = req.body.NeckWoodSelection;
    const NeckConstruction = req.body.NeckConstruction;
    const Headstocks = req.body.Headstocks;
    const HeadstockAngles = req.body.HeadstockAngles;
    const NeckTaping = req.body.NeckTaping;
    const TrussRod = req.body.TrussRod;
    const NeckAssembly = req.body.NeckAssembly;
    const FreatWoodSelection = req.body.FretWoodSelection;
    const ScaleLenths = req.body.ScaleLenths;
    const FretNumbers = req.body.FretNumbers;
    const FretboardRadius = req.body.FretboardRadius;
    const Inlays = req.body.Inlays;
    const InlayMaterial = req.body.InlayMaterial;
    const BodyNeckBinding = req.body.BodyNeckBinding;
    const Fretwires = req.body.Fretwires;
    const Paint = req.body.Paint;
    const Finish = req.body.Finish;
    const CustomShopFinish = req.body.CustomShopFinish;
    const TuningKeys = req.body.TuningKeys;
    const Nut = req.body.Nut;
    const Bridges = req.body.Bridges;
    const Pickups = req.body.Pickups;
    const Potentiometers = req.body.Potentiometers;
    const SelectorSwitches = req.body.SelectorSwitches;
    const Knobs = req.body.Knobs;
    const OutputJacks = req.body.OutputJacks;
    const StrapPins = req.body.StrapPins;
    const Pickgaurds = req.body.Pickgaurds;
    const CustomGigBag = req.body.CustomGigBag;
    const CustomCase = req.body.CustomCase;
    const Strap = req.body.Strap;
    const picks = req.body.picks;
    const fullName = req.body.fullName;
    const Phone = req.body.Phone;
    const email = req.body.email;
    const socialId = req.body.socialId;
    const SpecialNote = req.body.SpecialNote;
    

    const newBuilder = new builder({
        
        WoodSelection,
        BodyConstruction,
        BodyShapes,
        BodyCurves,
        BodyCavities,
        BodyBinding,
        NeckWoodSelection,
        NeckConstruction,
        Headstocks,
        HeadstockAngles,
        NeckTaping,
        TrussRod,
        NeckAssembly,
        FreatWoodSelection,
        ScaleLenths,
        FretNumbers,
        FretboardRadius,
        Inlays,
        InlayMaterial,
        BodyNeckBinding,
        Fretwires,
        Paint,
        Finish,
        CustomShopFinish,
        TuningKeys,
        Nut,
        Bridges,
        Pickups,
        Potentiometers,
        SelectorSwitches,
        Knobs,
        OutputJacks,
        StrapPins,
        Pickgaurds,
        CustomGigBag,
        CustomCase,
        Strap,
        picks,
        fullName,
        Phone,
        email,
        socialId,
        SpecialNote
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