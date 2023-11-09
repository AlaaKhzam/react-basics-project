import { Badge } from "@chakra-ui/react";

const HealthLabel = ({ healthLabels, label }) => {
  if (healthLabels.includes(label)) {
    return (
      <Badge
        ml={1}
        px={2}
        py={1}
        bg="purple.500"
        color="white"
        borderRadius="lg"
      >
        {label}
      </Badge>
    );
  }
  return null;
};
export default HealthLabel;
