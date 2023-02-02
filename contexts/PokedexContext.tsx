import { createContext } from "react";
import { DexContext } from "@/types/pokedex";

const PokedexContext = createContext<DexContext>({
  pokedexes: [],
  currentPokedex: "",
  handleChange: (e: any) => {},
  entries: [],
  isLoading: false,
});

export default PokedexContext;
