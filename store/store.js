import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecipesStore = create(
  persist(
    (set, get) => ({
      //   recipes: [],
      savedRecipes: [],

      //   setData: (data) => set((state) => ({ recipes: data })),
      ToggleSave: (recipeId) =>
        set((state) => ({
          savedRecipes: state.savedRecipes.includes(recipeId)
            ? state.savedRecipes.filter((_id) => _id !== recipeId)
            : [...state.savedRecipes, recipeId],
        })),
    })

    // {
    //   name: "spot",
    // }
  )
);
