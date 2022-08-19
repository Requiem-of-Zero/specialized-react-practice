import React from "react";
import {
  SecondaryNavBarWrapper,
  SecondaryNavContentContainer,
  ShippingCTAtxt,
  UserAuth,
  FindRetailer,
  FindRetailerLink,
  Flag,
  Language,
  LoginButton,
} from "./SecondaryNavBar.styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SecondaryNavBar = () => {
  return (
    <SecondaryNavBarWrapper>
      <SecondaryNavContentContainer>
        <ShippingCTAtxt href="#">
          Free Shipping on orders over $50*
        </ShippingCTAtxt>
        <UserAuth>
          <FindRetailerLink href="#">
            <LocationOnIcon className="location-icon" />
            Find A Retailer
          </FindRetailerLink>
          <Language href="#English">
            <Flag src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/flags/country-US.svg" />
            EN
          </Language>
          <LoginButton href="sign_in">Sign In</LoginButton>
        </UserAuth>
      </SecondaryNavContentContainer>
    </SecondaryNavBarWrapper>
  );
};

export default SecondaryNavBar;
