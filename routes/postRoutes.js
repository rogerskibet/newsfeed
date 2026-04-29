const express = require('express');
const Post = require('../models/Post');
const validateObjectId = require("../middleware/validateObjectId");

const router = express.Router();

 

// CREATE post(POST)
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all posts(GET)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET single post(GET/:id)
router.get('/:id',validateObjectId,async(req,res) => {
  try{
    const post = await Post.findById(req.params.id);

    if(!post){
      return res.status(404).json({message: "Post not found"});
    }
    res.json(post);
  } catch(err){
    res.status(500).json(err);
  }
});

//UPDATE Post(PUT)
router.put('/:id',validateObjectId,async(req,res) => {
  try{
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new : true}
    );

    res.json(updatedPost);
  } catch(err){
    res.status(500).json(err);
  }
});

//DELETE a post(DELETE)
router.delete('/:id',validateObjectId, async(req,res) => {
  try{
    await Post.findByIdAndDelete(req.params.id);
    res.json({message: "Post deleted"});
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;