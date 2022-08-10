import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

function SearchBar() {
  const [keyWord, setKeyWord] = useState();
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/busqueda/${keyWord}`);
  }

  return (
    <form
      className="principal-form-container"
      onSubmit={function (event) {
        handleSearch(event);
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Buscar peliculas"
        onChange={function (event) {
          setKeyWord(event.target.value);
        }}
      />
      <button className="form-search_icon" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchBar;
