import mongoose from "mongoose";

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
    type: String,
    required: true,
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
