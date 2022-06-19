import styled from "@emotion/styled";

type BlogHover = {
  hover: boolean;
};

export const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  cursor: pointer;
  border-radius: 20px;
  img#blog-image {
    border-radius: 20px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transform: ${(props: BlogHover) =>
      props.hover ? "scaleX(1.01) scaleY(1.03)" : "scale(1)"};
    border: ${(props: BlogHover) =>
      props.hover ? "2px solid red" : "0px solid red"};
    animation: border 0.15s ease-in;
  }
  @keyframes border {
    0% {
      transform: scale(1);
    }
    100% {
      transform: "scaleX(1.01) scaleY(1.02)";
    }
  }
`;