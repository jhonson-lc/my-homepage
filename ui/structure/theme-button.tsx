import {
  Tooltip,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {FaMoon} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";

function ThemeButton({size}: {size: number}) {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Tooltip
      bg={useColorModeValue("gray.800", "whiteAlpha.800")}
      borderRadius="lg"
      label={colorMode === "light" ? "Dark mode" : "Light mode"}
    >
      <IconButton
        _focus={{boxShadow: "none"}}
        _hover={{borderColor: "secondary"}}
        aria-label="Theme button"
        border="2px"
        borderColor={useColorModeValue("gray.400", "whiteAlpha.400")}
        borderRadius="100%"
        color={useColorModeValue("black", "white")}
        fontSize={size}
        h={size - 12}
        icon={useColorModeValue(<FaMoon />, <BsSunFill />)}
        rounded="full"
        variant="ghost"
        w={size - 12}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
}

export default ThemeButton;
