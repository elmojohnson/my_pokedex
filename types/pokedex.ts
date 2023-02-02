export interface Pokedex {
  name: string;
  url: string;
}

export interface DexContext {
  pokedexes: Pokedex[];
  currentPokedex: string;
  handleChange: (e: any) => void;
  isLoading: boolean;
  entries: Enrty[]
}

export interface Enrty {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  }
}
