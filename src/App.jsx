import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import WeatherProvider from "./context/WeatherContext";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Navigation />
        <Dashboard />
        <Modal />
      </WeatherProvider>
    </div>
  );
}

export default App;
