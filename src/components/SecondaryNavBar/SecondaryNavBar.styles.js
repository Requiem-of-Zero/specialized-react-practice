import styled from "styled-components";

export const SecondaryNavBarWrapper = styled.div`
  width: 100%;
  background-color: black;
  height: 32px;
  z-index: 10;
  display: fixed;
`;

export const SecondaryNavContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: inherit;
  z-index: 9;
  background-color: black;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
`;

export const UserAuth = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;

export const FindRetailer = styled.div`
  display: flex;
  color: white;
  font-size: 12px;
  align-items: center;
`;

export const FindRetailerLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const LocationIcon = styled.div`
  width: 10px;
  height: auto;
`;

export const ShippingCTAtxt = styled.a`
  color: white;
  font-size: 16px;
  margin-left: 30px;
`;

export const Flag = styled.img`
  margin-right: 5px;
`;

export const Language = styled.a`
  color: white;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.a`
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #414141;
  height: 100%;
  padding: 0 40px;
`;
