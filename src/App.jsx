import { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={handleBackToList} />
      ) : (
        <RecipeListPage onRecipeSelect={handleRecipeSelect} />
      )}
    </>
  );
};
