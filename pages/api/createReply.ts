import { previewClient } from "lib/sanity-server";

export default async function createComment(req, res) {
  const { _id, user, description: comment } = JSON.parse(req.body);
  try {
    await previewClient.create({
      _type: "reply",
      comments: {
        _ref: _id,
        _type: "reference",
      },
      comment,
      author: {
        _type: "reference",
        _ref: user.userId,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ message: "Comment submitted" });
}
