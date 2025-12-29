import { useMemo } from "react";
import { getHeroesByPublishers } from "../helpers/getHeroesByPublishers";
import type { Hero } from "../data/heroes";
import { HeroesCard } from "./HeroesCard";

export const HeroeList = ({
  publisher,
}: {
  publisher: "DC Comics" | "Marvel Comics";
}) => {
  const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3  g-3">
        {heroes.map((hero: Hero) => (
          <HeroesCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
};
