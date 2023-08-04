import dbConnect from "../../../../db/connect";
import Recipe from "../../../../db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const recipe = await Recipe.findById(id).populate("user");
    if (!recipe) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(recipe);
  } else if (request.method === "PATCH") {
    await Recipe.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: `Recipe ${id} updated!` });
  } else if (request.method === "DELETE") {
    await Recipe.findByIdAndDelete(id);

    response.status(200).json({ status: `Recipe ${id} successfully deleted.` });
  }
}
