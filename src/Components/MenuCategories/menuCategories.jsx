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
      console.log(data);

      setGenres(data.genres);
    }
    getGenres();
  }, []);

  return (
    <main className="menu-container">
      <div className="header-bottom">
        <button
          onClick={function () {
            function handleAccordion() {
              setActiveMenu(!activeMenu);
            }
            handleAccordion();
          }}
          className="header-bottom-menu_icon"
        >
          <h3>CATEGORIES</h3>
          <i
            className={
              activeMenu === false ? "fas fa-chevron-down" : "fas fa-angle-up"
            }
          ></i>
        </button>
      </div>
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
    </main>
  );
}

export default MenuCategories;
