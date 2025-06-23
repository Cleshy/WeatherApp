import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Modal() {
  const { error } = useContext(WeatherContext);

  if (!error) return null;

  return (
    <div className={`modal ${error ? "showModal" : ""}`}>
      <p className="modal-text">{error.message}</p>
    </div>
  );
}

export default Modal;
