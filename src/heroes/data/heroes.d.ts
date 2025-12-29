// Definición de tipos para el archivo heroes.js

interface Hero {
  id: string;
  superhero: string;
  publisher: "DC Comics" | "Marvel Comics";
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

declare const heroes: Hero[];

export { heroes, Hero };