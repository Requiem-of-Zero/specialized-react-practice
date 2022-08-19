import React from "react";
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
          <li key={i}>
            <SectionLink href={link.url} key={key}>{link.linkText}</SectionLink>
          </li>
        );
      })}
    </SectionLinksList>
  );
};

export default SectionLinks;
