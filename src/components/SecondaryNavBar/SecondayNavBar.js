import React from "react";
import {
  SecondaryNavBarWrapper,
  SecondaryNavContentContainer,
  ShippingCTAtxt,
  UserAuth,
  FindRetailer,
  FindRetailerLink,
} from "./SecondaryNavBar.styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SecondaryNavBar = () => {
  return (
    <SecondaryNavBarWrapper>
      <SecondaryNavContentContainer>
        <ShippingCTAtxt href="#">
          Free Shipping on orders over $50*
        </ShippingCTAtxt>
      </SecondaryNavContentContainer>
      <UserAuth>
        <FindRetailer>
          <FindRetailerLink href="#">
            <LocationOnIcon />
          </FindRetailerLink>
        </FindRetailer>
      </UserAuth>
    </SecondaryNavBarWrapper>
  );
};

export default SecondaryNavBar;
