import { Heading, Flex, Box, Image, Text } from "@chakra-ui/react";
import RecipeDetail from "./RecipeDetail";
import HealthLabel from "./HealthLabel";

const RecipeCard = ({ recipe, onRecipeSelect }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg="white"
      as="button"
      onClick={() => onRecipeSelect(recipe)}
    >
      <Image
        borderRadius="100%"
        src={recipe.image}
        alt={recipe.label}
        objectFit="cover"
        boxSize="200px"
        mx="auto"
      />
      <Heading fontSize="xl" mt={4} textAlign="center">
        {recipe.label}
      </Heading>
      <Flex justifyContent="center" mt={2} wrap="wrap">
        <HealthLabel healthLabels={recipe.healthLabels} label="Vegan" />
        <HealthLabel healthLabels={recipe.healthLabels} label="Vegetarian" />
      </Flex>
      <RecipeDetail label="green" detail={recipe.dietLabels} />
      <RecipeDetail label="gray" detail={recipe.mealType} />
      {recipe.dishType && recipe.dishType.length > 0 && (
        <Text mt={2} textAlign="center" fontWeight="bold">
          Dish: {recipe.dishType.join(", ")}
        </Text>
      )}
      <RecipeDetail label="red" detail={recipe.cautions} />
    </Box>
  );
};

export default RecipeCard;
