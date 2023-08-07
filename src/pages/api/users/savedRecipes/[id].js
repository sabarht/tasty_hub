import dbConnect from "../../../../../db/connect";
import User from "../../../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    console.log("id", id);
    try {
      const user = await User.findById(id);
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
      return response.status(200).json(user.savedRecipes);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: "Error fetching user data" });
    }
  }
}
