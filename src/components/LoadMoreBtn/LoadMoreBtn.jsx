import css from "../LoadMoreBtn/LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
    return (
        <button type="button" onClick={onClick} className={css.btn}>
            Більше фото
        </button>
    );
}
