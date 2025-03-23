import ImageCard from "../ImageCard/ImageCard"
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({ items, openModal }) {
    return (
		<ul className={css.list}>
			{items.map((item) => (
				<li key={item.id}>
					<ImageCard onClick={() => openModal(item)} item={item}></ImageCard>
				</li>
			))}
		</ul>

		)
}