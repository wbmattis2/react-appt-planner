import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({data}) => {

  return (
    <div>
      {data.map((obj, i) => <Tile object={obj} key= {i} />)}
    </div>
  );
};
