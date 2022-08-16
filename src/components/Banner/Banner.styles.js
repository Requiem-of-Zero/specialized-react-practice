import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  height: 1200px;
`;
