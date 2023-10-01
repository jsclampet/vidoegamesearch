import { ChangeEvent, useEffect, useState } from "react";
import apiClient, { GameData } from "./services/apiClient";
import "./App.css";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Games from "./components/Games";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Search from "./components/Search";
import userService from "./services/user-services";

// bg color #151515
// text color || primary #FFFFFF
//text color || secondary #7D7D7D

const App = () => {
  const [gameData, setGameData] = useState<GameData[]>([]);

  // state setup for scroll/load
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const { request, cancel } = userService.getGames(search);
    request.then(({ data }) => setGameData(data.results));

    return cancel();
  }, [search]);

  return (
    <ChakraProvider>
      <div
        style={{
          backgroundColor: "#151515",
          color: "#FFFFFF",
          paddingTop: "40px",
        }}
      >
        <Search
          handleSearch={(e) => {
            console.log(e.currentTarget.value);
          }}
          handleSubmit={() => {}}
        />
      </div>
      <Flex p="30px" style={{ backgroundColor: "#151515", color: "#FFFFFF" }}>
        <NavBar />
        <div>
          <Heading fontSize="6xl">New and trending</Heading>
          <p style={{ marginBottom: "25px" }}>
            Based on player counts and release date
          </p>
          <Filter />
          <div>
            <Games gameInfo={gameData} />
          </div>
        </div>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
