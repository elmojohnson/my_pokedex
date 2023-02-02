import PokedexContext from "@/contexts/PokedexContext";
import React, { useContext } from "react";
import PokemonItem from "../items/PokemonItem";
import PokemonItemLoading from "../items/PokemonItemLoading";

const PokemonList = () => {
  const { entries, isLoading } = useContext(PokedexContext);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {isLoading ? (
        <>
          {[...Array(15)].map((_, i) => {
            return <PokemonItemLoading key={i} />;
          })}
        </>
      ) : (
        <>
          {entries.map((pokemon) => {
            return <PokemonItem key={pokemon.entry_number} {...pokemon} />;
          })}
        </>
      )}
    </div>
  );
};

export default PokemonList;
