import { Link } from "react-router";
import type { Hero } from "../data/heroes";

const CharactersByHero = ({
  alter_ego,
  characters,
}: {
  alter_ego: string;
  characters: string;
}) => {
  return alter_ego === characters ? (
    <></>
  ) : (
    <p className="text-muted">{characters}</p>
  );
};

export const HeroesCard = ({ hero }: { hero: Hero }) => {
  const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>
              <CharactersByHero
                alter_ego={hero.alter_ego}
                characters={hero.characters}
              />

              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>Mas..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
