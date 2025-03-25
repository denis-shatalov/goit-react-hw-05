import css from "../MovieInfo/MovieInfo.module.css"

export default function MovieInfo({ film }) {

const posterUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

    return (
        <div className={css.infobox}>
            <img className={css.poster} src={posterUrl} alt={film.title} />
            <div className={css.info}>
                <h2>{film.title}</h2>
                <p>Оцінка користувачів: {film.vote_average}</p>
                <h3>Опис:</h3>
                <p>{film.overview}</p>
                <h3>Жанри:</h3>
                <p> {film.genres.map(genre => genre.name).join(', ')}</p>
            </div>
        </div>
        
    )
}