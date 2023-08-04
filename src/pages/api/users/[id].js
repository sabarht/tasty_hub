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
    console.log("req", request.body);
    try {
      const savedRecipeIdsToAdd = request.body.savedRecipes;
      await User.findByIdAndUpdate(id, {
        $addToSet: { savedRecipes: { $each: savedRecipeIdsToAdd } },
      });
      return response.status(201).json({ status: "Saved recipes updated" });
    } catch (error) {
      console.log(error);
      return response
        .status(400)
        .json({ error: "Error updating saved recipes" });
    }
  }
}
///
// export async function xhandler(req, res) {
//   const {
//     query: { id },
//     method,
//   } = req;
//   await dbConnect();
//   switch (method) {
//     case "GET":
//       try {
//         const user = await User.findById(id);
//         if (!user) {
//           return res.status(400).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: user });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;
//     case "PATCH":
//       try {
//         const user = await User.findByIdAndUpdate(id, req.body, {
//           new: true,
//           runValidators: true,
//         });
//         if (!user) {
//           return res.status(400).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: user });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }
