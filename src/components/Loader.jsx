import { ClipLoader } from "react-spinners";

export default function Loader({ loading, color = "#000000", size = 50, speedMultiplier = 1 }) {
  const cssOverride = { display: "block", margin: "0 auto" };

  return (
    <>
      {loading && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={cssOverride}
            size={size}
            speedMultiplier={speedMultiplier}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Завантаження...</p>
        </div>
      )}
    </>
  );
}
