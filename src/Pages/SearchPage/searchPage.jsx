import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardContainer from "../../Components/CardContainer/cardContainer";
import { apiKey } from "../../Utils/utils";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const params = useParams();
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
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${params.keyWord}&language=es&page=${currentPage}`
        );
        const data = await response.json();
        setMovies(data);
      }

      getMovies();
    },
    [params.keyWord, currentPage]
  );

  return (
    <main>
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

export default SearchPage;
