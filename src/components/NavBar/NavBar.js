import React from "react";
import {
  NavBarWrapper,
  NavBarLogo,
  NavBarLinks,
  NavBarLink,
  NavBarLinksContainer,
  NavBarSearchIcon,
  NavBarCtaContainer,
  NavBarWishlistIcon,
  NavBarCart,
  NavBarContainer,
} from "./NavBar.styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ({ categories }) => {
  return (
    <NavBarWrapper>
      <NavBarContainer>
        <a href="https://www.specialized.com/us/en">
          <NavBarLogo src="https://cdn.shopify.com/s/files/1/0904/4132/files/spec-logo-bp.jpg?v=1585000290" />
        </a>
        <NavBarLinksContainer>
          <NavBarLinks>
            {categories.map((category, i) => {
              const key = "nav_link-" + i;
              return (
                <li key={i}>
                  <NavBarLink href="#" key={key}>
                    {category.categoryTitle}
                  </NavBarLink>
                </li>
              );
            })}
          </NavBarLinks>
        </NavBarLinksContainer>
        <NavBarCtaContainer>
          <NavBarSearchIcon href="#search">
            <SearchIcon />
          </NavBarSearchIcon>
          <NavBarWishlistIcon href="#wishlist">
            <FavoriteBorderIcon />
          </NavBarWishlistIcon>
          <NavBarCart href="#cart">
            <ShoppingCartIcon />
          </NavBarCart>
        </NavBarCtaContainer>
      </NavBarContainer>
    </NavBarWrapper>
  );
};

export default NavBar;
