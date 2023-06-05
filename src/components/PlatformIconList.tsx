import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    "ps-vita": FaWindows,
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    "nintendo-switch": SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1} whiteSpace={"normal"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          boxSize={5}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
