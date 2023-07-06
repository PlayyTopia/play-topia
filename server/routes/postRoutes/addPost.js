const express = require("express");
const router = express.Router();
const handleImage = require('../../middleware/handleImage')
const Post = require("../../models/blog");

router.post("addPost",handleImage('image'),);
