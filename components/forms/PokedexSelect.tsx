import React, { useContext } from "react";
import PokedexContext from "@/contexts/PokedexContext";

const PokedexSelect = () => {
  const { pokedexes, currentPokedex, handleChange } = useContext(PokedexContext);
  
  return (
    <div className="bg-accent px-3 rounded-full overflow-hidden hover:brightness-95">
      <select value={currentPokedex} onChange={handleChange} className="bg-transparent py-1 outline-none text-white font-semibold capitalize">
        {pokedexes.map((pokedex) => {
          return (
            <option value={pokedex.name} key={pokedex.name} className="text-black capitalize">
              {pokedex.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PokedexSelect;
