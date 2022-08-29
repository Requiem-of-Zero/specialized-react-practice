import React from "react";
import {
  BannerWrapper,
  ContentContainer,
  CtaContainer,
  BannerContainer,
  BannerHeader,
  BannerSubHeader,
} from "./Banner.styles";
import Button from "../Button/Button";

const Banner = ({ subtitle, title, ctas, imgUrl, align }) => {
  return (
    <BannerWrapper imgUrl={imgUrl}>
      <BannerContainer>
        <ContentContainer align={align}>
          <BannerSubHeader>{subtitle}</BannerSubHeader>
          <BannerHeader>{title}</BannerHeader>
          <CtaContainer>
            {ctas.map((cta, i) => {
              const key = "bannerCta-" + i;
              return <Button {...cta} key={key} />;
            })}
          </CtaContainer>
        </ContentContainer>
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Banner;
