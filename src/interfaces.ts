// Tipagem para as raridades possíveis
type Rarity =
  | "exotic"
  | "mythical"
  | "legendary"
  | "epic"
  | "rare"
  | "unusual"
  | "common";

// Interface para o formato de cada item em boxesRarity
export interface BoxRarity {
  rarity: Rarity;
  name: string;
  color: string;
  borderColor: string;
}

// Interface para o formato de cada item em boxes
export interface Box {
  rarity: Rarity;
  message: string;
}

// Interface para o formato de colorsRarity (mapeamento de Rarity para propriedades de cor)
export interface ColorsRarity {
  [key: string]: {
    border: string;
    background: string;
  };
}

// Interface para o formato de cada item em boxesSorted (uma combinação de Box e BoxRarity)
export interface BoxSorted {
  rarity: Rarity;
  message: string;
  name: string;
}
