const SearchText = (data, searchTerm) => {
  return data.hits
    .map((hit) => hit.recipe)
    .filter((recipe) => {
      const searchContent = `${recipe.label} ${recipe.healthLabels.join(" ")}`;
      return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
    });
};

export default SearchText;
