import React from "react";
import {
  QuadBannerBlockContainer,
  QuadBannerContainer,
  QuadBannerWrapper,
} from "./QuadBanner.styles";

import Banner from "../Banner/Banner";

const QuadBanner = ({ banners }) => {
  return (
    <QuadBannerWrapper>
      <QuadBannerContainer>
        {banners.map((block, i) => {
          const key = 'grid_block-' + i
          return <QuadBannerBlockContainer>
            <Banner {...block} key={key}/>
          </QuadBannerBlockContainer>;
        })}
      </QuadBannerContainer>
    </QuadBannerWrapper>
  );
};

export default QuadBanner;
