import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    console.log("id", id);
    try {
      const user = await User.findById(id).populate("savedRecipes").exec();
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
      return response.status(200).json(user.savedRecipes);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: "Error fetching user data" });
    }
  }
  if (request.method === "PATCH") {
    console.log("req PATCH", request.body);
    try {
      const savedRecipeIdToAdd = request.body.savedRecipes;
      console.log("savedRecipeIdsToAdd", savedRecipeIdToAdd);

      await User.findByIdAndUpdate(id, {
        $addToSet: { savedRecipes: { $each: savedRecipeIdToAdd } },
      });
      return response.status(201).json({ status: "Saved recipes updated" });
    } catch (error) {
      console.log(error);
      return response
        .status(400)
        .json({ error: "Error updating saved recipes" });
    }
  }
  if (request.method === "DELETE") {
    console.log(request.body);
    try {
      const saved = await User.findByIdAndUpdate(id, {
        $pullAll: {
          savedRecipes: [request.body.recipeId],
        },
      });
      console.log("savedrecpes4", saved);

      if (!saved) {
        return response.status(404).json({ error: "saved not found" });
      }
      return response.status(200).json({ status: "Success" });
    } catch (error) {
      console.error("Error unsaved", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
