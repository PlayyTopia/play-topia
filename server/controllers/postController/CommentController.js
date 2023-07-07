const Post = require("../../models/blog");

const addComment = async (req, res) => {
  try {
    const { userId, id } = req.params;
    const { comment_details, user_name } = req.body;
    const allPost = await Post.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: {
            user_id: userId,
            comment_details,
            user_name,
          },
        },
      },
      { new: true }
    );
    res.status(200).json(allPost);
    console.log(allPost);
  } catch (error) {
    res.status(500, error.message);
  }
};

const getComment = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }

    const comments = post.comments.filter((comment) => !comment.delete);

    res.status(200).json(comments);

    res.status(200).json(comments);
    console.log(allPost);
  } catch (error) {
    res.status(500, error.message);
  }
};

module.exports = {
  addComment,
  getComment,
};
