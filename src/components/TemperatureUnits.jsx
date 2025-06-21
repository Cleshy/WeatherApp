import { useState } from "react";

function TemperatureUnits() {
  const [activeUnit, setActiveUnit] = useState("C");

  return (
    <div className="temp-container">
      <button
        onClick={() => setActiveUnit("C")}
        className={`temp ${activeUnit === "C" ? "active" : ""}`}
      >
        °C
      </button>
      <button
        onClick={() => setActiveUnit("F")}
        className={`temp ${activeUnit === "F" ? "active" : ""}`}
      >
        °F
      </button>
    </div>
  );
}

export default TemperatureUnits;
