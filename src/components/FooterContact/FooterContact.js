import React from "react";
import {
  FooterContactWrapper,
  InputHeader,
  FooterInputField,
  FooterInputButton,
  FooterInputContainer,
  Terms,
  FooterContactCaption,
  RetailerButton
} from "./FooterContact.styles";

const FooterContact = () => {
  return (
    <FooterContactWrapper>
      <InputHeader>NEWSLETTER</InputHeader>
      <FooterInputContainer>
        <FooterInputField placeholder="Email Address" type="email" />
        <FooterInputButton>JOIN</FooterInputButton>
      </FooterInputContainer>
      <FooterContactCaption>
        By submitting your email address you agree to the  
        <Terms href="#">Terms & Conditions</Terms>
      </FooterContactCaption>
      <RetailerButton>
        Find A Retailer
      </RetailerButton>
    </FooterContactWrapper>
  );
};

export default FooterContact;
