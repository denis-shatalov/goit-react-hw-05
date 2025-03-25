import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router';
import { getMovieDetails } from "../../FilmService";
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import css from "../MovieDetailsPage/MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieDetails(movieId);
        setFilm(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
          <Link className={css.back } to={backLinkRef.current}>Go back</Link>

      {isLoading && <b>Loading...</b>}
      {error && <b>Error...</b>}
      {film && <MovieInfo film={film} />}

      <ul>
        <li>
          <NavLink to="cast">Актори</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Відгуки</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading cast or reviews</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}