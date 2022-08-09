import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        console.log(data);
      }
      getMovies();
    },
    [currentPage]
  );

  return (
    <main>
      <section>
        {movies?.results?.map(function (movie) {
          return (
            <Link to={"/"} key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <div>
                <p>
                  {movie.vote_average * 10}
                  <span>%</span>
                </p>
              </div>
            </Link>
          );
        })}
      </section>
      <div>
        <button
          onClick={function () {
            nextPage(-1);
          }}
        >
          Anterior
        </button>
        <button
          onClick={function () {
            nextPage(1);
          }}
        >
          Siguiente
        </button>
      </div>
    </main>
  );
}

export default Home;
