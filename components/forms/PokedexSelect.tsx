import React, { useContext } from "react";
import PokedexContext from "@/contexts/PokedexContext";

const PokedexSelect = () => {
  const { pokedexes, currentPokedex, handleChange } = useContext(PokedexContext);
  return (
    <select value={currentPokedex} onChange={handleChange}>
      {pokedexes.map((pokedex) => {
        return <option value={pokedex.url} key={pokedex.name}>{pokedex.name}</option>;
      })}
    </select>
  );
};

export default PokedexSelect;
