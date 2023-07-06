const express = require("express");
const router = express.Router();
const handleImage = require("../../middleware/handleImage");
const blog = require("../../controllers/blog");

router.post("/addPost", handleImage.single("image"), blog.addPost);

module.exports = router;
