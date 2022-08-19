import React from "react";
import {
  FooterWrapper,
  SupportCol,
  ResourcesCol,
  AboutCol,
  FooterNavHeader,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SupportCol>
        <FooterNavHeader>SUPPORT</FooterNavHeader>
        <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Installments</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Bike Registration</a></li>
            <li><a href="#">Roval Registration</a></li>
            <li><a href="#">Support Center</a></li>
        </ul>
      </SupportCol>

      <ResourcesCol>
        <FooterNavHeader>RESOURCES</FooterNavHeader>
        
      </ResourcesCol>
      <AboutCol>
        <FooterNavHeader>ABOUT</FooterNavHeader>
      </AboutCol>
    </FooterWrapper>
  );
};

export default Footer;
