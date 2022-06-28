import { previewClient } from "lib/sanity-server";

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    await previewClient.create({
      _type: "comments",
      post: {
        _ref: _id,
        _type: "reference",
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ message: "Comment submitted" });
}
