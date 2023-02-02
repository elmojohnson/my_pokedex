import PokedexContext from "@/contexts/PokedexContext";
import React, { useContext } from "react";
import PokemonItem from "../items/PokemonItem";

const PokemonList = () => {
  const { entries, isLoading } = useContext(PokedexContext);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {entries.map((pokemon) => {
            return <PokemonItem key={pokemon.entry_number} {...pokemon} />
          })}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
