import React from "react";
import PokedexSelect from "./forms/PokedexSelect";

const Navbar = () => {
  return (
    <div className="bg-primary py-2 sticky top-0 z-50 shadow">
      <div className="wrapper flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl">Pokemon</h1>
        <PokedexSelect />
      </div>
    </div>
  );
};

export default Navbar;
