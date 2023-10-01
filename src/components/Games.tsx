import {
  AiFillWindows,
  AiFillAndroid,
  AiOutlineApple,
  AiOutlinePlus,
  AiFillApple,
} from "react-icons/ai";
import { BsXbox, BsNintendoSwitch } from "react-icons/bs";

import {
  Card,
  CardBody,
  ChakraProvider,
  Flex,
  Image,
  Stack,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { GameData } from "../services/apiClient";

interface Props {
  gameInfo: GameData[];
}

const Platforms = ({ gameInfo }: Props) => {
  const platformLogos = {
    pc: <AiFillWindows />,
    xbox: <BsXbox />,
    nintendo: <BsNintendoSwitch />,
    mac: <AiFillApple />,
    android: <AiFillAndroid />,
    ios: <AiOutlineApple />,
  };

  return (
    <ChakraProvider>
      <div className="card-group">
        <Flex wrap="wrap" direction="row">
          {gameInfo &&
            gameInfo.map((game) => {
              return (
                <Card
                  bg="transparent"
                  color="#ffffff"
                  key={crypto.randomUUID()}
                  className="card"
                  width="25%"
                >
                  <CardBody border="none">
                    <Image src={game.background_image} borderTopRadius="15px" />

                    <Stack
                      borderBottomRadius="15px"
                      bg="#202020"
                      px="15px"
                      pb="25px"
                    >
                      <Flex>
                        {game.parent_platforms?.map((videoGame) => {
                          return (
                            <Text mr="5px" mt="20px" mb="4px">
                              {platformLogos[videoGame.platform.slug]}
                            </Text>
                          );
                        })}
                      </Flex>

                      <Text className="game-title">{game.name} 🎯</Text>
                      <Tag size="md" width="100px" bg="#303030" color="#ffffff">
                        <TagLeftIcon>
                          <AiOutlinePlus />
                        </TagLeftIcon>
                        <TagLabel>{game.added}</TagLabel>
                      </Tag>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
        </Flex>
      </div>
    </ChakraProvider>
  );
};

export default Platforms;
