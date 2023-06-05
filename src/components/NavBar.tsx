import { HStack, Image, Text } from "@chakra-ui/react";
import react from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
function NavBar({ onSearch }: Props) {
  return (
    <HStack padding={"10px"}>
      <Image src={react} boxSize={"60px"} />

      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
