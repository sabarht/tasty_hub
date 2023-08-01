import dbConnect from "../../../../db/connect";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const comments = await Comment.find();
    return response.status(200).json(comments);
  }
  if (request.method === "POST") {
    try {
      const commentData = request.body;
      console.log(commentData);
      const comment = new Comment(commentData);
      console.log("cmt", comment);

      await comment.save();

      return response.status(201).json({ status: "Comment created" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
