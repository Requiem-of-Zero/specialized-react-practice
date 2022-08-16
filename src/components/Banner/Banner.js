import React from "react";
import { BannerWrapper } from "./Banner.styles";
import CtaOne from "../CtaOne/CtaOne";
const Banner = ({subtitle,title, shopNowArgs, learnMoreArgs, imgUrl}) => {
  return <BannerWrapper imgUrl={imgUrl}>
    <CtaOne 
      subtitle={subtitle} 
      title={title} 
      shopNowArgs={shopNowArgs} 
      learnMoreArgs={learnMoreArgs}
    />
  </BannerWrapper>;
};

export default Banner