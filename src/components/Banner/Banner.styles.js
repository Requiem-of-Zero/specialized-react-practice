import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  height: 1000px;
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 40%;
  width: 40rem;
`;

export const BannerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  font-family: "Arial";
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const BannerHeader = styled.h2`
  color: #fff;
  font-size: 48px;
  padding-bottom: 1rem;
`;

export const BannerSubHeader = styled.h5`
  color: #fff;
  font-size: 12px;
  padding-bottom: 0.5rem;
`;
