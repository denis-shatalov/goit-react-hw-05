import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../FilmService";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

      useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setMovies(data);
            })
            .catch(error => {
                setError('Не вдалось загрузити. Спробуйте ще раз');
            });
    }, []);

    return (
        
        <MovieList movies = {movies}></MovieList>
    )
}