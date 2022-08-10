import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardContainer from "../../Components/CardContainer/cardContainer";
import { apiKey } from "../../Utils/utils";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(
    function () {
      async function getMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${params.keyWord}&language=es&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      }

      getMovies();
    },
    [params.keyWord]
  );

  return (
    <section className="movies-cards-container">
      {movies?.map(function (movie) {
        return <CardContainer movie={movie} />;
      })}
    </section>
  );
}

export default SearchPage;
