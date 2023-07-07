const express = require("express");
const router = express.Router();
const handleImage = require("../../middleware/handleImage");
const blog = require("../../controllers/blog");

router.post("/addPost", handleImage.single("image"), blog.addPost);


///get post
router.get("/api/getPost", blog.getPost);


////delete
router.put("/deletePost/:id", blog.deletePost);
///approve
router.put("/approvePost/:id", blog.approvePost);

module.exports = router;
