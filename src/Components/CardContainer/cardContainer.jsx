import { Link } from "react-router-dom";
import "./cardContainer.css";

function CardContainer({ movie }) {
  return (
    <Link className="movie-card-container" to={`/pelicula/${movie.id}`}>
      <div className="movie-image-container">
        <img
          className="movie-card-image"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        />
        <p className="movie-rating">
          {movie.vote_average * 10}
          <span>%</span>
        </p>
      </div>
      <h2 className="movie-card-title">{movie.title}</h2>
      <p className="movie-card-date">{movie.release_date}</p>
    </Link>
  );
}

export default CardContainer;
