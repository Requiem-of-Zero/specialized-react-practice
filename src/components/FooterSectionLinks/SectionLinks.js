import React from "react";
import sections from "../../constants/FooterArgs";
import {
  SectionLinksList,
  SectionTitle,
  SectionLink,
} from "./SectionLinks.styles";
const SectionLinks = ({ sectionTitle, sectionLinks }) => {
  return (
    <SectionLinksList>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {sectionLinks.map((link, i) => {
        const key = "footer_link-" + i;
        return (
          <li>
            <SectionLink href={link.url}>{link.linkText}</SectionLink>
          </li>
        );
      })}
    </SectionLinksList>
  );
};

export default SectionLinks;
