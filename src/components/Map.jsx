import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Position: latitude {lat}, longtitude: {lng}{" "}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change potion{" "}
      </button>
    </div>
  );
};

export default Map;
