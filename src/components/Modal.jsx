import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Modal() {
  const { error, setError } = useContext(WeatherContext);

  useEffect(() => {
    if (!error) return;

    const errorTimeOut = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => {
      clearTimeout(errorTimeOut);
    };
  }, [error]);

  if (!error) return null;

  return (
    <div className={`modal ${error ? "showModal" : ""}`}>
      <p className="modal-text">{error.message}</p>
    </div>
  );
}

export default Modal;
