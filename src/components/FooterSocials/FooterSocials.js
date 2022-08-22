import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FooterSocialsWrapper, FooterSocialLink } from "./FooterSocials.styles";

const FooterSocials = ({ platform, redirectUrl }) => {
  const handleIcon = () => {
    if (platform === "Instagram") {
      return <InstagramIcon />;
    } else if (platform === "Facebook") {
      return <FacebookIcon />;
    } else if (platform === "Twitter") {
      return <TwitterIcon />;
    } else if (platform === "Youtube") {
      return <YouTubeIcon />;
    }
  };

  return (
    <FooterSocialsWrapper>
      <FooterSocialLink href={redirectUrl}>{handleIcon()}</FooterSocialLink>
    </FooterSocialsWrapper>
  );
};

export default FooterSocials;
