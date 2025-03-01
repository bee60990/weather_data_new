import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather_app">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Julia and can be found on{" "}
          <a href="" target="_blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
