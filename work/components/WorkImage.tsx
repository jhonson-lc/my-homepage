import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import { Work } from "../types";

interface Props {
  work: Work;
}
const Wrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  height: 200px;
  width: "350px";
  border-radius: 20px;
  position: relative;

  .work-image {
    border-radius: 20px;
  }
`;
const WorkImage: React.FC<Props> = ({ work }) => {
  return (
    <Wrapper>
      <Image
        alt={work.title}
        className="work-image"
        layout="fill"
        objectFit="cover"
        src={`${work.thumbnail}`}
      />
    </Wrapper>
  );
};

export default WorkImage;
