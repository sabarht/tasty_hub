import { connectMongo } from "./mongoose";
import User from "../db/models/User";

export async function getAllUsers() {
  await connectMongo();

  return User.find({ isActive: true });
}

// export async function isRecipeSaved(recipeId) {
//   const Saved = await Saved.findOne({
//     recipeId,
//   });

//   return !!favorite;
// }

// export async function addSaved(recipeId) {
//   const newSave = new Saved({
//     recipeId,
//   });

//   await newSave.save();
// }

// export async function removeSave(recipeId) {
//   await Saved.findByIdAndDelete(recipeId);
// }

// export async function toggleSave(recipeId) {
//   if (isRecipeSaved(recipeId)) {
//     addFavorite(recipeId);
//   } else {
//     removeSave(recipeId);
//   }
// }
