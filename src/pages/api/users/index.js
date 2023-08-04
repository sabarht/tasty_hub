// import dbConnect from "../../../../db/connect";
// import User from "../../../../db/models/User";
// import Recipe from "../../../../db/models/Recipe";
// import Saved from "../../../../db/models/Saved";
// export default async function handler(request, response) {
//   await dbConnect();
//   const { id } = request.query;
//   if (request.method === "GET") {
//     const user = await User.findById(id).populate("savedRecipes").exec();
//     if (!user) {
//       // If the user is not found, return an error or appropriate response
//       return response.status(404).json({ error: "Kir" });
//     }
//     return response.status(200).json(user.savedRecipes);
//   }
//   if (request.method === "POST") {
//     try {
//       //   const savedData = request.body;
//       //   const saved = new Saved(savedData);
//       //   await saved.save();
//       //   const user = await User.findByIdAndUpdate(id, {
//       //     $push: { savedRecipes: saved },
//       //   });
//       //   await user.save();
//       const savedRecipeIdsToAdd = request.body.savedRecipeIds; // Assuming an array of recipe IDs is sent in the request body
//       await User.findByIdAndUpdate(id, {
//         $addToSet: { savedRecipes: { $each: savedRecipeIdsToAdd } },
//       });
//       return response.status(201).json({ status: "Saved recipes updated" });

//       //   return response.status(201).json({ status: "Saved recipes updated" });
//     } catch (error) {
//       console.log(error);
//       return response.status(400).json({ error: error.message });
//     }
//   }
// }
///latest code
// import dbConnect from "../../../../db/connect";
// import User from "../../../../db/models/User";

// export default async function handler(request, response) {
//   await dbConnect();
//   const { id } = request.query;

//   if (request.method === "GET") {
//     console.log("id", id);
//     try {
//       const user = await User.findById(id).populate("savedRecipes").exec();
//       if (!user) {
//         return response.status(404).json({ error: "User not found" });
//       }
//       return response.status(200).json(user.savedRecipes);
//     } catch (error) {
//       console.log(error);
//       return response.status(500).json({ error: "Error fetching user data" });
//     }
//   }

//   if (request.method === "POST") {
//     try {
//       const savedRecipeIdsToAdd = request.body.savedRecipeIds;
//       await User.findByIdAndUpdate(id, {
//         $addToSet: { savedRecipes: { $each: savedRecipeIdsToAdd } },
//       });
//       return response.status(201).json({ status: "Saved recipes updated" });
//     } catch (error) {
//       console.log(error);
//       return response
//         .status(400)
//         .json({ error: "Error updating saved recipes" });
//     }
//   }
// }
