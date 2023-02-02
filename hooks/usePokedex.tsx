import { useEffect, useState } from "react";
import { Enrty, Pokedex } from "@/types/pokedex";
import axios from "axios";

const usePokedex = () => {
  // Pokedex
  const [pokedexes, setPokedexes] = useState<Pokedex[]>([]);
  const [currentPokedex, setCurrentPokedex] = useState<string>("https://pokeapi.co/api/v2/pokedex/national");

  // Entries (Pokemon)
  const [entries, setEntries] = useState<Enrty[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  // Get list of pokedex
  const getPokedexList = async () => {
    try {
      const result = await axios.get("https://pokeapi.co/api/v2/pokedex?limit=50");
      setPokedexes(result.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Load selected/current pokedex and display entries
  const getEntries = async () => {
    try {
      setLoading(true);
      const result = await axios.get(currentPokedex);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  // On change/select
  const handleChange = (e: any) => setCurrentPokedex(e.target.value);

  // On page load
  useEffect(() => {
    getPokedexList();
  }, []);

  // On change current pokedex
  useEffect(() => {
    getEntries();
  }, [currentPokedex]);

  return { pokedexes, currentPokedex, handleChange, entries, isLoading };
};

export default usePokedex;
