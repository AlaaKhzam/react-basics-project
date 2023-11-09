import { Input, Flex } from "@chakra-ui/react";

const SearchBar = ({ value, onChange }) => {
  return (
    <Flex justifyContent="center" width="full" mb={8}>
      <Input
        placeholder="Search recipes"
        value={value}
        onChange={onChange}
        width={{ base: "full", sm: "700px" }}
      />
    </Flex>
  );
};

export default SearchBar;
