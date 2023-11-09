import { Badge, Text } from "@chakra-ui/react";

const RecipeDetail = ({ label, detail }) => {
  if (detail.length === 0) return null;

  return (
    <Text mt={2} textAlign="center">
      <Badge
        ml={1}
        px={2}
        py={1}
        bg={`${label}.500`}
        color="white"
        borderRadius="lg"
      >
        {detail.join(", ")}
      </Badge>
    </Text>
  );
};

export default RecipeDetail;
