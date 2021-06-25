import React  from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">

   <Weather defaultCity="New York" />
   <footer> This project was created by Teodora Kiryakova and is {""}
   <a href="https://github.com/TeddyKiryakova/react-weather-app-project" target="_blank" rel="noreferrer">
     open-sourced on GitHub
   </a>
    </footer>
    </div>
    </div>
  );
}
