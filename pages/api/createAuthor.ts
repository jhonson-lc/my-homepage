import { urlForImage } from "lib/sanity";
import { previewClient } from "lib/sanity-server";

export default async function createAuthor(req, res) {
  console.log(req);
  const { _id, name, image } = JSON.parse(req.body);
  try {
    await previewClient.createOrReplace({
      _id: _id,
      _type: "author",
      name,
      slug: {
        current: name.toLowerCase().replace(/\s/g, "-"),
      },
      image: urlForImage(image),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ message: "Author submitted" });
}
