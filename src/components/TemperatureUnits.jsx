import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function TemperatureUnits() {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <div className="temp-container">
      <button
        onClick={() => setUnit("metric")}
        className={`temp ${unit === "metric" ? "active" : ""}`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`temp ${unit === "imperial" ? "active" : ""}`}
      >
        °F
      </button>
    </div>
  );
}

export default TemperatureUnits;
