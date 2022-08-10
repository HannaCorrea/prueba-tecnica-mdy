import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../../Utils/utils.js";
import "./home.css";

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
        console.log(data);
      }
      getMovies();
    },
    [currentPage]
  );

  return (
    <main>
      <section className="movies-cards-container">
        {movies?.results?.map(function (movie) {
          return (
            <Link
              className="movie-card-container"
              to={`/pelicula/${movie.id}`}
              key={movie.id}
            >
              <div className="movie-image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt=""
                  className="movie-card-image "
                />
                <p className="movie-rating">{movie.vote_average * 10}%</p>
              </div>
              <h3 className="movie-card-title">{movie.title}</h3>
              <p className="movie-card-date">{movie.release_date}</p>
            </Link>
          );
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
