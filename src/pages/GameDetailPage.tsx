import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box marginRight={2}>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <SimpleGrid columns={2} as="dl">
            <DefinitionItem term={"Platforms"}>
              {game.parent_platforms.map((p) => (
                <Text key={p.platform.id}> {p.platform.name}</Text>
              ))}
            </DefinitionItem>
            <DefinitionItem term={"Metascore"}>
              <CriticScore score={game.metacritic} />
            </DefinitionItem>
            <DefinitionItem term={"Genres"}>
              {game.genres.map((g) => (
                <Text key={g.id}>{g.name}</Text>
              ))}
            </DefinitionItem>
            <DefinitionItem term={"Publishers"}>
              {game.publishers.map((p) => (
                <Text key={p.id}>{p.name}</Text>
              ))}
            </DefinitionItem>
          </SimpleGrid>
        </Box>
        <Box>
          <GameTrailer gameId={game.id} />
          <GameScreenshot gameId={game.id} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
