import mongoose from "mongoose";
import Comment from "./Comment";

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
  description: {
    type: String,
    required: true,
  },
  direction: {
    type: Array,
    required: true,
  },
  comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
