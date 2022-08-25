import styled from "styled-components";

export const MegaNavWrapper = styled.div`
  width: 100%;
`;

export const MegaNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MegaNavLeftContainer = styled.div`
  width: 210px;
  letter-spacing: 1px;
  font-size: 12px;
  padding-right: 30px;
`;

export const MegaNavMiddleContainer = styled.div`
  padding-left: 30px;
`;

export const MegaNavRightContainer = styled.div`
`;

export const NavBreak = styled.div`
height: 400px;
width: 1px;
background-color: #e6e6e6;
`

export const MegaNavLeftLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 7px 0;

  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;

export const MegaNavLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 15px;
  text-transform: uppercase;
  padding: 0;

  a:last-child{
    margin: 0 0 23px;
  }
`;

export const MegaNavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;