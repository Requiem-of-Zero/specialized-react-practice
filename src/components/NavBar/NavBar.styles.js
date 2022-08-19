import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
`;

export const NavBarContainer = styled.div`
  display: flex;
  position: fixed;
  border-bottom: 1px solid white;
  height: 70px;
  z-index: 9;
  background-color: white;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarLinksContainer = styled.div`
  display: flex;
  width: 30%;
`;

export const NavBarCtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8%;
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
    transition: color 0.2s ease-out;
  }
`;

export const NavBarSearchIcon = styled.a`
  color: black;
  &:hover {
    color: #ed1c24;
    transition: color 0.2s ease-out;
  }
`;

export const NavBarWishlistIcon = styled.a`
  color: black;
  &:hover {
    color: #ed1c24;
    transition: color 0.2s ease-out;
  }
`;

export const NavBarCart = styled.a`
  color: black;
  &:hover {
    color: #ed1c24;
    transition: color 0.2s ease-out;
  }
`;
