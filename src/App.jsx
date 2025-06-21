import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Navigation />
        <Dashboard />
      </WeatherProvider>
    </div>
  );
}

export default App;
