import React from "react";

export const Tile = ({object}) => {
  return (
    <div className="tile-container">
      {Object.values(object).map((value, i) => <p className={i === 0 ? "tile-title" : "tile"} key={i} >{value}</p>)}
    </div>
  );
};
