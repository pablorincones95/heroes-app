import { heroes } from "../data/heroes";
import type { Hero } from "../data/heroes";

export const getHeroesByPublishers = (publisher: "DC Comics" | "Marvel Comics"): Hero[] => {
  const validPublishers = ["DC Comics", "Marvel Comics"] as const;

  if (!validPublishers.includes(publisher)) {
    throw new Error("Publisher is not valid");
  }
  const heroesFiltered = heroes.filter((hero: Hero) => hero.publisher === publisher);
  return heroesFiltered;
};
