import React from "react";
import {
  SecondaryFooterWrapper,
  LegalLinksList,
  LegalLink,
  SecondaryFooterContentContainer,
  CATransparencyLink,
  Copyright,
} from "./SecondaryFooter.styles";

const SecondaryFooter = ({ footerLinks }) => {
  return (
    <SecondaryFooterWrapper>
      <SecondaryFooterContentContainer>
        <LegalLinksList>
          {footerLinks.map((obj, i) => {
            const key = "legal_link-" + i;
            return (
              <li>
                <LegalLink href={obj.url}>{obj.label}</LegalLink>
              </li>
            );
          })}
        </LegalLinksList>
        <CATransparencyLink href="#">
          California Transparency Act
        </CATransparencyLink>
      </SecondaryFooterContentContainer>
      <Copyright>
        © 2022 Specialized Bicycle Components, Inc. All Rights Reserved.
      </Copyright>
    </SecondaryFooterWrapper>
  );
};

export default SecondaryFooter;
