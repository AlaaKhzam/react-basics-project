import { useState } from "react";
import { Heading, SimpleGrid, Container } from "@chakra-ui/react";
import { data } from "../utils/data";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import SearchText from "../components/SearchText";

const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const recipes = SearchText(data, searchTerm);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxW="container.xl" centerContent p={4}>
      <Heading mb={8}>Your Recipe App</Heading>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={8} w="full">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.label}
            recipe={recipe}
            onRecipeSelect={onRecipeSelect}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default RecipeListPage;
