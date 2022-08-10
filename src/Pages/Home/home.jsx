import { useEffect } from "react";
import { useState } from "react";
import CardContainer from "../../Components/CardContainer/cardContainer.jsx";
import banner from "../../Assets/banner.jpg";
import { apiKey } from "../../Utils/utils.js";

function Home() {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage(numberPage) {
    if (currentPage > 0 && currentPage < movies.total_pages) {
      setCurrentPage(currentPage + numberPage);
    }
  }

  useEffect(
    function () {
      async function getMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=all&language=es&page=${currentPage}&include_adult=false`
        );

        const data = await response.json();
        setMovies(data);
      }
      getMovies();
    },
    [currentPage]
  );

  return (
    <main>
      <img src={banner} alt="" className="banner" />
      <section className="movies-cards-container">
        {movies?.results?.map(function (movie) {
          return <CardContainer movie={movie} key={movie.id} />;
        })}
      </section>
      <div className="buttons-home-container">
        <button
          className="button-page-previous"
          onClick={function () {
            nextPage(-1);
          }}
          disabled={currentPage === 1}
        >
          <i className="fa-solid fa-angle-left"></i>
          Anterior
        </button>
        <button
          className="button-page-next"
          onClick={function () {
            nextPage(1);
          }}
        >
          Siguiente
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </main>
  );
}

export default Home;
