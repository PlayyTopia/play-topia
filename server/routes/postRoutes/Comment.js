const express = require("express");
const router = express.Router();
const CommentController = require('../../controllers/postController/CommentController')


router.put("/addComment/:id/:userId",CommentController.addComment)
router.get("/getComment/:id",CommentController.getComment)

module.exports = router;
