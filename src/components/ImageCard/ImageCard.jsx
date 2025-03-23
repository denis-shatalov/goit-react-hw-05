export default function ImageCard({ item, onClick }) {
    return (
        <div onClick={onClick} style={{ cursor: "pointer" }}>
  <img src={item.urls.small} alt={item.alt_description}  width="280" height="180" />
</div>

    )
}