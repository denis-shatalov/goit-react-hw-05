import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from "../MovieCast/MovieCast.module.css"

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    
     useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM1ZDIzN2UxZmYzZmFiZTY4ZTI2ZTE4ZmZkNTFiZCIsIm5iZiI6MTc0Mjc2OTA5Mi40MzcsInN1YiI6IjY3ZTA4YmM0ZTRhOWM4NjkwNjA3ZmIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOldh65SExJSrvu1A1eqJbYKunt03t2hNB-5Cwf07pU',
            },
            params: {
              language: 'uk-UA',
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('❌ Помилка при завантаженні акторів:', error);
      }
    };

    fetchCast();
  }, [movieId]);

    return (
        <div className={css.list}>
             {cast.map(actor => (
        <li key={actor.id}>
          <div className={css.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://via.placeholder.com/100x150?text=No+Image'
              }
              alt={actor.name}
            />
            <p className={css.actor}>{actor.name}</p>
            <p className={css.actor}>{actor.character}</p>
          </div>
        </li>
      ))} 
    </div>
       
    )

}