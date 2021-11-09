const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const blogSchema = require('../Schemas/blogSchema');

const Blog = new mongoose.model('Blog', blogSchema);

// post blog;

router.post('/', (req, res) => {
    const newBlog = new Blog(req.body);
    await newBlog.save((err) => {
        if(err) {
            res.status(500).json({
                error: "there was a server site error"
            })

        }
        else{
            res.status(200).json({
                message: "Todo Was inserted successfully"
            })
        }
    })
});

// get blog

router.get('/', async(req, res) => {
    await Blog.find((err, data) => {
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
