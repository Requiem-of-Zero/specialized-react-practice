import React from "react";
import Tile from "../Tile/Tile";
import { HorizontalTilesContainer } from "./Tiles.styles";

const Tiles = ({ products }) => {

  return (
    <HorizontalTilesContainer>
      {products.map((product, i) => {
        const key = "tile-" + i;
        return (<Tile {...product} key={key} />);
      })}
    </HorizontalTilesContainer>
  );
};

export default Tiles;
