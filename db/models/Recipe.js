import mongoose from "mongoose";
import Comment from "./Comment";
import User from "./User";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  direction: {
    type: Array,
    required: true,
  },
  comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
