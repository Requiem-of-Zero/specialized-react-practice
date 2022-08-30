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

const Banner = ({
  subtitle,
  title,
  ctas,
  imgUrl,
  align,
  justify,
  imgHeight,
  headerSize,
  ctaWidth
}) => {
  const handleCtaAlign = (align) => {
    if (align === "center") {
      return "center";
    } else if (align === "right") {
      return "flex-end";
    } else {
      return "flex-start";
    }
  };

  return (
    <BannerWrapper
      imgUrl={imgUrl}
      imgHeight={imgHeight}
      align={handleCtaAlign(align)}
    >
      <BannerContainer height={imgHeight} ctaWidth={ctaWidth}>
        <ContentContainer
          align={handleCtaAlign(align)}
          justify={handleCtaAlign(justify)}
        >
          <BannerSubHeader>{subtitle}</BannerSubHeader>
          <BannerHeader headerSize={headerSize}>{title}</BannerHeader>
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
