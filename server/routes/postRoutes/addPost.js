const express = require("express");
const router = express.Router();
// const handleImage = require("../../middleware/handleImage");
const blog = require("../../controllers/postController/blog");

router.post("/addPost", blog.addPost);

module.exports = router;
