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
import MegaNav from "../MegaNav/MegaNav";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ( categories ) => {
  console.log(categories, 'categories')
  const handleCategoryNav = (categories) => {
    const keys = Object.keys(categories)
    const result = [];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      result.push(
        <li>
          <NavBarLink href={categories[key].categoryUrl}>
            {categories[key].categoryTitle}
          </NavBarLink>
        </li>
      );
    }
    return result;
  };

  return (
    <NavBarWrapper>
      <NavBarContainer>
        <a href="https://www.specialized.com/us/en">
          <NavBarLogo src="https://cdn.shopify.com/s/files/1/0904/4132/files/spec-logo-bp.jpg?v=1585000290" />
        </a>
        <NavBarLinksContainer>
          <NavBarLinks>{handleCategoryNav(categories)}</NavBarLinks>
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
