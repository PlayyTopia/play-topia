const Post = require("../models/blog");
const upload = require("../middleware/handleImage");

const addPost = async (req, res) => {
  const { user_id, user_name, title, desc } = req.body;

  try {
    const postData = new Post({
      user_id,
      user_name,
      title,
      desc,
      image: req.file, // Store the filename in the image field
    });

    const savedPost = await postData.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the post." });
  }
};

module.exports = {
  addPost,
};
