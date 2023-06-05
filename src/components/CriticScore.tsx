import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score >= 85 ? "green" : "yellow";

  return (
    <Badge fontSize={"16px"} paddingX={3} borderRadius={5} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
