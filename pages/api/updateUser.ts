import prisma from "lib/prisma";

export default async function updateUser(req, res) {
  try {
    const { name, id } = JSON.parse(req.body);
    await prisma.user.update({
      where: { id },
      data: { name },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ message: "User updated" });
}
