import { Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const Search = ({ handleSearch }: Props) => {
  return (
    <form onSubmit={() => {}}>
      <Flex justifyContent="center">
        <InputGroup
          variant="unstyled"
          maxWidth="1200px"
          borderRadius="100px"
          p="10px"
          bg="#2B2B2B"
          color="#717171"
          _hover={{ bg: "#FFFFFF" }}
          placeholder="Search XXXXXX Games"
        >
          <InputLeftAddon
            children={<FiSearch />}
            bg="none"
            border="none"
            fontSize="4xl"
            ml="15px"
          />
          <Input
            fontSize="20px"
            width="90%"
            border="none"
            outline="none"
            pl="25px"
            placeholder="Search XXXXXX Games"
            onChange={handleSearch}
          />
        </InputGroup>
      </Flex>
    </form>
  );
};

export default Search;
