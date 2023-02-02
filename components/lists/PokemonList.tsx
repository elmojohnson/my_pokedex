import React, { useContext } from "react";
import PokedexContext from "@/contexts/PokedexContext";

import PokemonItem from "../items/PokemonItem";
import PokemonItemLoading from "../items/PokemonItemLoading";

import { AnimatePresence } from "framer-motion";
import Grid from "../utils/Grid";

const PokemonList = () => {
  const { entries, isLoading } = useContext(PokedexContext);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Grid>
          {[...Array(15)].map((_, i) => {
            return <PokemonItemLoading key={i} />;
          })}
        </Grid>
      ) : (
        <Grid>
          {entries.map((pokemon) => {
            return <PokemonItem key={pokemon.entry_number} {...pokemon} />;
          })}
        </Grid>
      )}
    </AnimatePresence>
  );
};

export default PokemonList;
