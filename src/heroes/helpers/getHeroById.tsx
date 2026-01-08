import { heroes } from "../data/heroes";

export const getHeroById = (id: string | undefined) => {
  if (!id) {
    return undefined;
  }
  return heroes.find((hero) => hero.id === id);
};
