import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  height: 1100px;
  width: 100%;
  border: none;
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 40%;
  right: 10%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align};
  text-align: ${({align}) => align};
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
  letter-spacing: 0.2rem;
`;
