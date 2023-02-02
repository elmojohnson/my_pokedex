import PokedexContext from "@/contexts/PokedexContext";
import React, { useContext } from "react";

const PokemonList = () => {
  const { entries, isLoading } = useContext(PokedexContext);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {entries.map((pokemon) => {
            return (
              <p key={pokemon.entry_number}>{pokemon.pokemon_species.name}</p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
