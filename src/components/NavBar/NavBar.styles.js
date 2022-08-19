import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  position: fixed;
  border-bottom: 1px solid white;
  height: 50px;
  z-index: 9;
  background-color: white;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const NavBarLinksContainer = styled.div`
  width: 30%;
`;

export const NavBarLogo = styled.img`
  width: 150px;
  height: 100%;
`;

export const NavBarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  text-transform: uppercase;
`;

export const NavBarLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 12px;
  &:hover {
    color: #ed1c24;
    transition: color 0.3s ease-out;
  }
`;
