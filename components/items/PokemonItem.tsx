import { Enrty } from "@/types/pokedex";
import React from "react";

const PokemonItem: React.FC<Enrty> = (pokemon) => {
  return (
    <div className="bg-white shadow rounded p-4 flex items-center space-x-4">
      <h5 className="text-muted text-sm font-bold">{String(pokemon.entry_number).padStart(3, "0")}</h5>
      <h3 className="capitalize text-xl font-bold">{pokemon.pokemon_species.name}</h3>
    </div>
  );
};

export default PokemonItem;
