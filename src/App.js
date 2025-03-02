import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather_app">
      <div className="container">
        <Weather defaultCity="Eppelheim" />

        <footer>
          This project was coded by Julia and can be found on{" "}
          <a
            href="https://github.com/bee60990/weather_data_new"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
