import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useDebounce } from 'use-debounce';
import MovieList from "../../components/MovieList/MovieList"
import { searchMovies } from '../../FilmService';
import css from "./MoviesPage.module.css"

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== '') {
      nextParams.set('query', event.target.value);
    } else {
      nextParams.delete('query');
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getFilms() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await searchMovies(debouncedQuery);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getFilms();
  }, [debouncedQuery]);

  return (
    <>
          <input className={css.search } type="text" value={query} onChange={changeSearchText} placeholder='Пошук фільмів' />
      {isLoading && <b>Пошук фільмів...</b>}
      {error && <b>Упс, сталась помилка, будь-ласка, перезавантажте сторінку.</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}