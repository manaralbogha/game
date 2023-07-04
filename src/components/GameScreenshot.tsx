import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";
interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenshot, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  if (!screenshot) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginY={2}>
      {screenshot?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
