import dbConnect from "../../../../db/connect";
import Recipe from "../../../../db/models/Recipe";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (request.method === "GET") {
    const recipes = await Recipe.find();
    return response.status(200).json(recipes);
  }
  if (request.method === "POST") {
    try {
      const recipeData = request.body;

      const recipe = new Recipe(recipeData);
      recipe.user = session.user._id;
      console.log(recipe);
      await recipe.save();

      return response.status(201).json({ status: "Recipe created" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
