import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const location = useLocation(); // Hook para la informacion de la ruta actual

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q as string); // Obtenemos los heroes que coincidan con la busqueda
  
  const showSearch:boolean = (q!.length === 0); // Mostramos el formulario si no hay busqueda o si la busqueda es vacia 
  const showError:boolean = (q!.length > 0) && heroes.length === 0 ; // Mostramos el formulario si no hay busqueda o si la busqueda es vacia 

  //Hook useForm para el manejo de formularios
  const { searchText, onInputChange } = useForm({
    searchText: q as string,
  });

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-1">
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert - alert-primary">
            Search a hero
          </div>

          <div className="alert - alert-danger">
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard /> */}

        </div>
      </div>
    </>
  )
}
