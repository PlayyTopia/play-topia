const mongoose = require("mongoose");

const Post = require("../../models/blog");

const upload = require("../../middleware/handleImage");

const addPost = async (req, res) => {
    const { user_id, user_name, title, desc } = req.body;

    try {
        const savedPost = await Post.create({
            user_id,
            user_name,
            title,
            description: desc,
            // image: req.file, // Store the filename in the image field
        });

        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json(error.message);
    }
};










/////////////////dashbord
const getPost = (req, res) => {
  Post.find({ approve: false ,delete:false} )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
/////////deletePost
const deletePost= async (req, res) => {
  
  const user_id = req.params.id;

  try {
    const result = await Post.findByIdAndUpdate(user_id, { $set: { delete: true } });
    
    if (!result) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post delete status updated' });
  } catch (error) {
    errorHandler(error, req, res);
  }
};
////approvePost
const approvePost= async (req, res) => {
  
  const user_id = req.params.id;

  try {
    const result = await Post.findByIdAndUpdate(user_id, { $set: { approve: true } });
    
    if (!result) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post delete status updated' });
  } catch (error) {
    errorHandler(error, req, res);
  }
};
//////////////get all comment
const getAllComments = async (req, res) => {
  try {
    const posts = await Post.find({ "comments.delete": false }, "comments"); // Find all posts and include only the comments field

    let allComments = [];

    posts.forEach((post) => {
      allComments = allComments.concat(post.comments);
    });

    res.json(posts);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  const postId = req.params.postId; 
console.log(commentId,postId)
  try {
    const comment = await 
    Post.updateOne(
      { _id: postId, 'comments._id': commentId },
      { $set: { 'comments.$.delete': true } },
    )
    console.log(comment)
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json({ message: 'Comment delete status updated' });
  } catch (error) {
    // errorHandler(error, req, res);
    console.log(error)
  }
};



module.exports = {
  addPost,
  getPost,
  deletePost,
  approvePost,
  getAllComments,
  deleteComment
};