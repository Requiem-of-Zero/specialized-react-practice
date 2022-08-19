import React from "react";
import {
  FooterWrapper,
  FooterContainer
} from "./Footer.styles";
import SectionLinks from "../FooterSectionLinks/SectionLinks";

const Footer = ({sections}) => {
  return (
    <FooterWrapper>
        <FooterContainer>
        {sections.map((section, i) => {
            const key = 'footer_nav_section' + i
            return <SectionLinks {...section} key={key}/>
        })}
        </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
