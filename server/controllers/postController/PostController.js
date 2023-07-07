const Post = require("../../models/blog");

const getPost = async (req, res) => {
  try {
    const allPost = await Post.find({
      approve: true,
      delete: false,
    });
    res.status(200).json(allPost);
  } catch (error) {
    res.status(500, error.message);
  }
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const onePost = await Post.findById(id);
    res.status(200).json(onePost);
  } catch (error) {
    res.status(500, error.message);
  }
};

const deleteOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const onePost = await Post.findByIdAndUpdate(id, {
      delete: true,
    });
    res.status(200).json(onePost);
  } catch (error) {
    res.status(500, error.message);
  }
};

module.exports = {
  getPost,
  getOnePost,
  deleteOnePost,
};
