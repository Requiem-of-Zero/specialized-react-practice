import styled from "styled-components";

export const BannerWrapper = styled.div`
  border: 1px solid black;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  height: ${({ imgHeight }) => imgHeight};
  width: 100%;
  border: none;
  display: flex;
  justify-content: flex-end;
`;

export const BannerContainer = styled.div`
  font-family: "Arial";
  display: flex;
  height: ${({ height }) => height};
  width: ${({ctaWidth}) => ctaWidth};
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
  height: ${({height}) => height};
  width: 100%;
`;


export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const BannerHeader = styled.h2`
  color: #fff;
  font-size: ${({headerSize}) => headerSize};
  padding-bottom: 1rem;
`;

export const BannerSubHeader = styled.h5`
  color: #fff;
  font-size: 12px;
  padding-bottom: 0.5rem;
  letter-spacing: 0.2rem;
`;
