import styled from "styled-components";

export const BannerWrapper = styled.div`
  border: 1px solid black;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  height: 900px;
`;
