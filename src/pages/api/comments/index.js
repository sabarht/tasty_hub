import dbConnect from "../../../../db/connect";
import Comment from "../../../../db/models/Comment";
import Recipe from "../../../../db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const recipe = await Recipe.findById(id).populate("comments").exec();

    return response.status(200).json(recipe.comments);
  }
  if (request.method === "POST") {
    try {
      const commentData = request.body;
      const comment = new Comment(commentData);

      await comment.save();
      const recipe = await Recipe.findByIdAndUpdate(id, {
        $push: { comments: comment },
      });
      await recipe.save();
      return response.status(201).json({ status: "Comment created" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
