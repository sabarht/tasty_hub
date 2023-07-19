import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Recipe;
