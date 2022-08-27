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
  DropDownContainer
} from "./NavBar.styles";
import MegaNav from "../MegaNav/MegaNav";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ({ categories }) => {
  const [dropDownId, setDropDownId] = useState(0);
  const handleDropDown = (categories) => {
    for(let i=0; i < categories.length; i++){
      let indivCategory = categories[i]
      if((indivCategory.id + 1) === dropDownId){
        return <MegaNav {...indivCategory.megaNav} />;
      }
    }
  }
  return (
    <NavBarWrapper>
      <NavBarContainer>
        <a href="https://www.specialized.com/us/en">
          <NavBarLogo src="https://cdn.shopify.com/s/files/1/0904/4132/files/spec-logo-bp.jpg?v=1585000290" />
        </a>
        <NavBarLinksContainer>
          <NavBarLinks>
            {categories.map((category, i) => {
              let key = "navbar_link-" + i;
              return (
                <li>
                  <NavBarLink
                    href={category.categoryUrl}
                    key={key}
                    onMouseEnter={() => setDropDownId(i + 1)}
                  >
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
      <DropDownContainer>
        {handleDropDown(categories)}
      </DropDownContainer>
    </NavBarWrapper>
  );
};

export default NavBar;
