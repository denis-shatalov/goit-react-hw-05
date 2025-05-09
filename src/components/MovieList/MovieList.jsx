
import css from "../MovieList/MovieList.module.css"
import { Link, useLocation } from 'react-router-dom';


export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.link}
          >
                  <p> { movie.title }</p> 
          </Link>
        </li>
      ))}
    </ul>
  );
}

