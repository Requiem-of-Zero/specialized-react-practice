import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  RideAppColContainer,
  RideAppContainer,
  MissionControlColContainer,
  MissionControlContainer,
  RideAppLink,
  AppleImg,
  GoogleImg,
  AppContainer,
  MissionControlLink,
  SocialsContainer
} from "./Footer.styles";
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
        <AppContainer>
          <RideAppContainer>
            <RideAppLink>Ride App</RideAppLink>
            <RideAppColContainer>
              <AppleImg src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/app-store-black.svg" />
              <GoogleImg src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/google-play-black.svg" />
            </RideAppColContainer>
            <MissionControlContainer>
              <MissionControlLink>Mission Control</MissionControlLink>
              <MissionControlColContainer>
                <AppleImg src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/app-store-black.svg" />
                <GoogleImg src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/google-play-black.svg" />
              </MissionControlColContainer>
            </MissionControlContainer>
          </RideAppContainer>
          <SocialsContainer>
          {socials.map((connection, i) => {
            const key = "foot_nav_connection" + i;
            return <FooterSocials {...connection} key={key} />;
          })}
          </SocialsContainer>
        </AppContainer>
        <FooterContact />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
