import { Text, SimpleGrid } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
      spacing={6}
      paddingX={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game} />{" "}
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;