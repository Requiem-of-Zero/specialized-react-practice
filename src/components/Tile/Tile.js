import React from "react";
import { TileWrapper, ProductImg, ProductLink, ProductTitle } from "./Tile.styles";

const Tile = ({ productImgUrl, productName, redirectUrl }) => {
  return (
    <TileWrapper>
        <ProductLink href={redirectUrl}>
            <ProductImg src={productImgUrl}/>
            <ProductTitle>{productName}</ProductTitle>
        </ProductLink>
    </TileWrapper>
  )
};

export default Tile;
