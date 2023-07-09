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
      image: req.file.path, // Store the filename in the image field
    });

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  addPost,
};
