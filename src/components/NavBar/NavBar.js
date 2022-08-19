import React from "react";
import {
  NavBarWrapper,
  NavBarLogo,
  NavBarLinks,
  NavBarLink,
  NavBarLinksContainer,
} from "./NavBar.styles";

const NavBar = ({ categories }) => {

  return (
    <NavBarWrapper>
      <a href="https://www.specialized.com/us/en">
        <NavBarLogo src="https://cdn.shopify.com/s/files/1/0904/4132/files/spec-logo-bp.jpg?v=1585000290" />
      </a>
      <NavBarLinksContainer>
      <NavBarLinks>
        {categories.map((category, i) => {
          const key = "nav_link-" + i;
          return (
            <li key={i}>
              <NavBarLink href='#' key={key}>{category.categoryTitle}</NavBarLink>
            </li>
          );
        })}
      </NavBarLinks>
      </NavBarLinksContainer>
      
    </NavBarWrapper>
  );
};

export default NavBar;
