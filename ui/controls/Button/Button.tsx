import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/react";

interface Props {
  text: string;
  color?: string;
  bg?: string;
  icon?: any;
  type?: "reset" | "submit" | "button";
  enabled?: boolean;
  x?: number;
  y?: number;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  color = "background",
  bg = "primary",
  icon,
  type,
  x = 10,
  y = 8,
  enabled,
  onClick,
}) => {
  return (
    <ButtonChakra
      _focus={{
        boxShadow: "none",
      }}
      _hover={{
        bg: bg,
        ring: "2px",
        borderColor: "background",
        ringColor: "red",
        ringOffset: "2px",
        ringOffsetColor: "background",
      }}
      bg={bg}
      borderWidth={2}
      color={color}
      fontSize={16}
      isDisabled={enabled}
      px={x}
      py={y}
      rightIcon={icon}
      rounded={40}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {text}
    </ButtonChakra>
  );
};

export default Button;
