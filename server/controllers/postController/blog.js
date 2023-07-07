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

const getPost = (req, res) => {
  Post.find({ approve: false ,delete:false} )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
/////////delete
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
////approve
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
module.exports = {
  addPost,
  getPost,
  deletePost,
  approvePost
};