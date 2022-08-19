import React from "react";
import { FooterWrapper, FooterContainer } from "./Footer.styles";
import SectionLinks from "../FooterSectionLinks/SectionLinks";
import FooterSocials from "../FooterSocials/FooterSocials";
import FooterContact from "../FooterContact/FooterContact";

const Footer = ({ sections, socials }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {sections.map((section, i) => {
          const key = "footer_nav_section" + i;
          return <SectionLinks {...section} key={key} />;
        })}
        {socials.map((connection, i) => {
          const key = "foot_nav_connection" + i;
          return 
            <FooterSocials
              platform={connection.platform}
              redirectUrl={connection.redirectUrl}
              key={key}
            />
        })}
        <FooterContact />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
