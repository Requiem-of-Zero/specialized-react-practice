import React from "react";
import { FooterSocialsWrapper, FooterSocialLink } from "./FooterSocials.styles";

const FooterSocials = ({ platform, redirectUrl }) => {
  return (
    <FooterSocialsWrapper>
      <FooterSocialLink>
        <FontAwesomeIcon icon={`fa-brands fa-${platform}`} color='white'/>
      </FooterSocialLink>
    </FooterSocialsWrapper>
  );
};
