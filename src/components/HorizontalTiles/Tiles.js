import React from "react";
import Tile from "../Tile/Tile";
import { HorizontalTilesContainer } from "./Tiles.styles";

const Tiles = ({ products }) => {

    console.log(products)
  return (
    <HorizontalTilesContainer>
      {products.map((product, i) => {
        const key = "tile-" + i;
        <Tile {...product} key={key} />;
      })}
    </HorizontalTilesContainer>
  );
};

export default Tiles;
