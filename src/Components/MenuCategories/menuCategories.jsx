import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../../Utils/utils";
import "./menuCategories.css";

function MenuCategories() {
  const [activeMenu, setActiveMenu] = useState(false);

  const [genres, setGenres] = useState();

  useEffect(function () {
    async function getGenres() {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`
      );
      const data = await response.json();
      setGenres(data.genres);
    }
    getGenres();
  }, []);

  return (
    <section className="menu-container">
      <button
        onClick={function () {
          function handleAccordion() {
            setActiveMenu(!activeMenu);
          }
          handleAccordion();
        }}
        className="menu-button-trigger"
      >
        <h3>CATEGORIES</h3>
        <i
          className={
            activeMenu === false ? "fas fa-chevron-down" : "fas fa-angle-up"
          }
        ></i>
      </button>
      <nav
        className={`genres-container ${
          activeMenu === true ? "genres-container--show" : ""
        }`}
      >
        {genres?.map(function (genre) {
          return (
            <Link
              className="category-text"
              key={genre.id}
              to={`/genero/${genre.id}`}
              onClick={function () {
                setActiveMenu(false);
              }}
            >
              {genre.name}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default MenuCategories;
