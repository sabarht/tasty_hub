import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set, get) => ({
    savedRecipes: [],

    toggleSaved: (_id) =>
      set((state) => ({
        savedRecipes: state.savedRecipes.includes(_id)
          ? state.savedRecipes.filter((element) => element !== _id)
          : [...state.savedRecipes, _id],
      })),
  }))
);

export default useStore;
