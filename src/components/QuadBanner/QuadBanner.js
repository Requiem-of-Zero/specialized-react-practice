import React from "react";
import {
  QuadBannerBlockContainer,
  QuadBannerContainer,
  QuadBannerWrapper,
} from "./QuadBanner.styles";
import Banner from "../Banner/Banner";

const QuadBanner = ({ banners, headerSize, justify, ctaWidth }) => {
  return (
    <QuadBannerWrapper>
      <QuadBannerContainer>
        {banners.map((block, i) => {
          const key = "grid_block-" + i;
          return (
            <QuadBannerBlockContainer>
              <Banner
                {...block}
                key={key}
                imgHeight="476px"
                headerSize={headerSize}
                justify={justify}
                ctaWidth={ctaWidth}
              />
            </QuadBannerBlockContainer>
          );
        })}
      </QuadBannerContainer>
    </QuadBannerWrapper>
  );
};

export default QuadBanner;
