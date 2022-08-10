import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../../Utils/utils";
import "./detailPage.css";

function DetailPage() {
  const [movie, setMovie] = useState();
  const params = useParams();

  useEffect(
    function () {
      async function getMovie() {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}&language=es`
        );
        const data = await response.json();

        setMovie(data);
      }
      getMovie();
    },
    [params.movieId]
  );

  return movie ? (
    <>
      <section className="movie-detail-page-container">
        <img
          className="movie-background-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt=""
        />

        <img
          className="movie-poster-image"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""
        />
        <section className="movie-information-container">
          <section className="movie-title-container">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-detail-date">
              {`${movie.release_date}(${movie.production_countries[0].iso_3166_1})`}
              <span className="movie-detail-genders">
                {" "}
                &#8226; {`${movie.genres[0].name},${movie.genres[1].name}`}
              </span>{" "}
              &#8226;
              <span className="movie-detail-time"> {movie.runtime} min</span>
            </p>
          </section>
          <div className="movie-detail-average-container">
            <p className="movie-detail-average">{movie.vote_average * 10}%</p>
            <span className="movie-detail-text">Puntuación de usuarios</span>
          </div>
          <span className="movie-detail-description-text">Sinópsis</span>
          <p className="movie-detail-description-principal">{movie.overview}</p>
        </section>
      </section>
    </>
  ) : null;
}

export default DetailPage;
