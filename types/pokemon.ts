export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonItem {
  id: number;
  name: string;
  abilities: Ability[];
  sprites: Sprites;
  types: Type[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

export interface Sprites {
  back_default: string;
  front_default: string;
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}
