import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from "../MovieReviews/MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
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
        setReviews(response.data.results);
      } catch (error) {
        console.log(error)
        setError('Не вдалося завантажити відгуки...');
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <section className={css.reviews}>
      {reviews.length === 0 ? (
        <p>Відгуків поки немає.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}