import "atropos/css";
import Atropos from "atropos/react";
import { Image } from "@chakra-ui/react";

export default function Certificate({ image }) {
  return (
    <Atropos id="ticket" style={{}}>
      <Image rounded={"20px"} src={image} alt="countries" />
    </Atropos>
  );
}
