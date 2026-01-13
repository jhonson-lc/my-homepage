import React from "react";
import styled from "@emotion/styled";

interface Props {
  thumbnail: string | undefined;
  video: string | undefined;
  title: string;
}
const Wrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  height: 200px;
  width: 100%;
  border-radius: 10px;
  position: relative;

  .work-image {
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;
const WorkImage: React.FC<Props> = ({ thumbnail, video, title }) => {
  return (
    <Wrapper>
      {thumbnail ? (
        <img alt={title} className="work-image" src={`${thumbnail}`} />
      ) : (
        <video
          id="video-player"
          autoPlay
          muted
          loop
          style={{
            borderRadius: "10px",
          }}
          playsInline
          src={video}
        >
          <source type="video/mp4" src={video} />
        </video>
      )}
    </Wrapper>
  );
};

export default WorkImage;
