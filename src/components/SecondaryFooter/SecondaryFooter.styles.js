import styled from "styled-components";

export const SecondaryFooterWrapper = styled.div`
  background-color: #000;
  width: 100%;
  height: 160px;
`;

export const SecondaryFooterContentContainer = styled.div`
  margin: 0 auto;
  width: 45%;
  padding: 30px 15px;
  text-align: center;
`;

export const LegalLinksList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding-bottom: 16px;
`;

export const LegalLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CATransparencyLink = styled.a`
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.25;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 16px;
`;


export const Copyright = styled.div`
    font-size: 12px;
    color: white;
    text-align: center;
    letter-spacing: 1px
`