import { Box, BoxRarity, BoxSorted, ColorsRarity } from "./interfaces";

export const boxesRarity: BoxRarity[] = [
  {
    rarity: "exotic",
    name: "Exótico",
    color: "exotic-gradient",
    borderColor: "#FF0099",
  },
  {
    rarity: "mythical",
    name: "Mítico",
    color: "mythical-gradient",
    borderColor: "#DD2929",
  },
  {
    rarity: "legendary",
    name: "Lendário",
    color: "legendary-gradient",
    borderColor: "#DDA429",
  },
  {
    rarity: "epic",
    name: "Épico",
    color: "epic-gradient",
    borderColor: "#5F29DD",
  },
  {
    rarity: "rare",
    name: "Raro",
    color: "rare-gradient",
    borderColor: "#0084F3",
  },
  {
    rarity: "unusual",
    name: "Incomum",
    color: "unusual-gradient",
    borderColor: "#00F308",
  },
  {
    rarity: "common",
    name: "Comum",
    color: "common-gradient",
    borderColor: "#898989",
  },
];

export const boxes: Box[] = [
  {
    rarity: "exotic",
    message: "0.9% de chance",
  },
  {
    rarity: "mythical",
    message: "2% de chance",
  },
  {
    rarity: "legendary",
    message: "5% de chance",
  },
  {
    rarity: "legendary",
    message: "5% de chance",
  },
  {
    rarity: "epic",
    message: "22% de chance",
  },
  {
    rarity: "epic",
    message: "22% de chance",
  },
  {
    rarity: "epic",
    message: "22% de chance",
  },
  {
    rarity: "epic",
    message: "22% de chance",
  },
  {
    rarity: "epic",
    message: "22% de chance",
  },
  {
    rarity: "rare",
    message: "38% de chance",
  },
  {
    rarity: "rare",
    message: "38% de chance",
  },
  {
    rarity: "rare",
    message: "38% de chance",
  },
  {
    rarity: "unusual",
    message: "64% de chance",
  },
  {
    rarity: "unusual",
    message: "64% de chance",
  },
  {
    rarity: "common",
    message: "82% de chance",
  },
  {
    rarity: "common",
    message: "82% de chance",
  },
  {
    rarity: "common",
    message: "82% de chance",
  },
  {
    rarity: "common",
    message: "82% de chance",
  },
  {
    rarity: "common",
    message: "82% de chance",
  },
  {
    rarity: "common",
    message: "82% de chance",
  },
];

export const colorsRarity: ColorsRarity = {
  exotic: {
    border: "#FF0099",
    background:
      "linear-gradient(65.13deg, rgba(255, 0, 153, 0.5) -6.69%, rgba(255, 0, 153, 0.25) 53.29%)",
  },
  mythical: {
    border: "#DD2929",
    background:
      "linear-gradient(65.13deg, rgba(221, 41, 41, 0.5) -6.69%, rgba(221, 41, 41, 0.25) 53.29%)",
  },
  legendary: {
    border: "#DDA429",
    background:
      "linear-gradient(65.13deg, rgba(221, 164, 41, 0.5) -6.69%, rgba(221, 164, 41, 0.25) 53.29%)",
  },
  epic: {
    border: "#5F29DD",
    background:
      "linear-gradient(65.13deg, rgba(95, 41, 221, 0.5) -6.69%, rgba(95, 41, 221, 0.25) 53.29%)",
  },
  rare: {
    border: "#0084F3",
    background:
      "linear-gradient(65.13deg, rgba(0, 132, 243, 0.47451) -6.69%, rgba(0, 132, 243, 0.25) 53.29%)",
  },
  unusual: {
    border: "#00F308",
    background:
      "linear-gradient(65.13deg, rgba(0, 243, 8, 0.47451) -6.69%, rgba(0, 243, 8, 0.25) 53.29%)",
  },
  common: {
    border: "#898989",
    background:
      "linear-gradient(65.13deg, rgba(137, 137, 137, 0.47451) -6.69%, rgba(137, 137, 137, 0.25) 53.29%)",
  },
};

export const boxesSorted: BoxSorted[] = [
  { rarity: "exotic", message: "0.9% de chance", name: "Exótico" },
  { rarity: "mythical", message: "2% de chance", name: "Mítico" },
  { rarity: "legendary", message: "5% de chance", name: "Lendário" },
  { rarity: "epic", message: "22% de chance", name: "Épico" },
  { rarity: "rare", message: "38% de chance", name: "Raro" },
  { rarity: "unusual", message: "64% de chance", name: "Incomum" },
  { rarity: "common", message: "82% de chance", name: "Comum" },
];
