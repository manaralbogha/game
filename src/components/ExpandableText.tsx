import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, isExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded
    ? children
    : children.substring(0, limit) + "  . . .   ";

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={2}
          height={"7"}
          colorScheme="yellow"
          fontWeight={"bold"}
          size={"sm"}
          onClick={() => isExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
