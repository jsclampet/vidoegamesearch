import { Select } from "@chakra-ui/react";

const Filter = () => {
  return (
    <div>
      <Select width="300px">
        <option value="">Relevance</option>
        <option value="">Date added</option>
        <option value="">Name</option>
        <option value="">Release date</option>
        <option value="">Popularity</option>
        <option value="">Average rating</option>
      </Select>
    </div>
  );
};

export default Filter;
