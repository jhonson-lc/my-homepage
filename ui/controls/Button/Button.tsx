import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/react";

interface Props {
  text: string;
  color?: string;
  bg?: string;
  icon?: any;
  type?: "reset" | "submit" | "button";
  enabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  color = "background",
  bg = "primary",
  icon,
  type,
  enabled,
  onClick,
}) => {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <ButtonChakra
      _after={{
        content: "''",
        height: "100%",
        width: "100%",
        position: "absolute",
        rounded: "40px",
        outline: `${hover ? "2px" : "0px"} solid red`,
        transform: `${hover ? "scaleX(1.04) scaleY(1.16)" : "scale(1)"}`,
        transition: "transform 0.2s ease-in-out",
      }}
      _focus={{
        boxShadow: "none",
      }}
      _hover={{
        bg: bg,
        border: "3px solid transparent",
      }}
      bg={bg}
      borderWidth={3}
      color={color}
      fontSize={16}
      isDisabled={enabled}
      px="30px"
      py="20px"
      rightIcon={icon}
      rounded={40}
      type={type ? type : "button"}
      onClick={onClick}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {text}
    </ButtonChakra>
  );
};

export default Button;
