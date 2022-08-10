import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardContainer from "../../Components/CardContainer/cardContainer";
import { apiKey } from "../../Utils/utils";

function CategoryPage() {
  const [categoryMovies, setCategoryMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();

  function nextPage(numberPages) {
    if (currentPage > 0 && currentPage < 366) {
      setCurrentPage(currentPage + numberPages);
    }
  }

  useEffect(
    function () {
      async function getCategory() {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&page=${currentPage}&with_genres=${params.genreId}`
        );

        const data = await response.json();
        console.log(data.results);

        setCategoryMovies(data.results);
      }
      getCategory();
    },
    [params.genreId, currentPage]
  );

  return (
    <section>
      <section className="movies-cards-container">
        {categoryMovies?.map(function (categoryMovie) {
          return <CardContainer movie={categoryMovie} key={categoryMovie.id} />;
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
    </section>
  );
}

export default CategoryPage;
