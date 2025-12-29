import { useLocation, useNavigate } from "react-router";
import { useForm } from "../hooks/userForm";
import { HeroesCard } from "../components/HeroesCard";
import { getHeroesByName } from "../helpers/getHeroesByName";
import type { Hero } from "../data/heroes";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const q = query.get("q") || "";

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar:</h4>
          <hr />
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados:</h4>
          <hr />

          <div
            className="alert alert-info"
            style={{ display: showSearch ? "" : "none" }}
          >
            Buscar un héroe
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No hay resultados para: <b>{q}</b>
          </div>

          {heroes.map((hero: Hero) => (
            <HeroesCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
