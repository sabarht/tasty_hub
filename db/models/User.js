import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  savedRecipes: { type: [Schema.Types.ObjectId], ref: "Recipe" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
