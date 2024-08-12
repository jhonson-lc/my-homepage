import { Stack } from "@chakra-ui/react";
import Certificate from "components/Certificate";
import React from "react";

const IMAGES = {
  javascript: {
    image: "/images/certificates/javascript.jpg",
    link: "https://www.freecodecamp.org/certification/alejandronanez/javascript-algorithms-and-data-structures",
  },
  python: {
    image: "/images/certificates/python.jpg",
    link: "https://www.freecodecamp.org/certification/alejandronanez/scientific-computing-with-python",
  },
};

const Certification: React.FC = () => {
  return (
    <Stack display={"grid"} gridTemplateColumns={"repeat(auto-fill, minmax(400px, 1fr))"} gap={20}>
      {Object.keys(IMAGES).map((key) => {
        const { image } = IMAGES[key];
        return <Certificate key={key} image={image} />;
      })}
    </Stack>
  );
};

export default Certification;
