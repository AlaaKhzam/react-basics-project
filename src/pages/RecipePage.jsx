import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  ListItem,
  Badge,
  Button,
  Stack,
  List,
  Divider,
} from "@chakra-ui/react";

const RecipePage = ({ recipe, onBack }) => {
  return (
    <Container maxW="container.xl" p={4}>
      <Button my={4} onClick={onBack} colorScheme="gray">
        Back to Recipes
      </Button>
      <Stack direction={["column", "row"]} spacing={8} align="stretch">
        <Box flexShrink={0} width={{ base: "100%", md: "50%" }}>
          <Image
            borderRadius="md"
            src={recipe.image}
            alt={recipe.label}
            objectFit="cover"
            width="100%"
            height={{ base: "auto", md: "1000px" }}
          />
        </Box>
        <Box flexGrow={1} bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            {recipe.label}
          </Heading>
          <Text fontSize="md" mb={2}>
            <strong>Total cooking time:</strong> {recipe.totalTime} minutes
          </Text>
          <Text fontSize="md" mb={4}>
            <strong>Servings:</strong> {recipe.yield}
          </Text>

          <Divider my={4} />

          <Heading as="h3" size="lg" mb={4}>
            Ingredients:
          </Heading>
          <List
            spacing={2}
            style={{ listStyleType: "disc", marginLeft: "1.5rem" }}
          >
            {recipe.ingredientLines.map((ingredient, index) => (
              <ListItem key={index}>{ingredient}</ListItem>
            ))}
          </List>

          <Divider my={4} />

          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Health labels:
            </Heading>
            <Stack direction="row" flexWrap="wrap">
              {recipe.healthLabels.map((label, index) => (
                <Badge
                  key={index}
                  px={3}
                  py={1}
                  colorScheme="purple"
                  borderRadius="full"
                  m={1} // Adding margin around badges
                >
                  {label}
                </Badge>
              ))}
            </Stack>
          </Box>

          {recipe.cautions.length > 0 && (
            <Box mt={4}>
              <Heading as="h3" size="lg" mb={4}>
                Cautions:
              </Heading>
              <Text fontSize="md">{recipe.cautions.join(", ")}</Text>
            </Box>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default RecipePage;
