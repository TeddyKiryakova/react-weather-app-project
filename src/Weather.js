import React from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] =useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
setWeatherData({
  ready: true,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed, 
  city: response.data.name,
  description: response.data.weather[0].description,
  icon: response.data.weather[0].icon,
  date: new Date(response.data.dt * 1000) 
});
} 

function search() {
  const apiKey = "1befc7e282d7d7b54698fa650271152a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);


}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
  setCity(event.target.value);

}

 if (weatherData.ready) {
   return (
        <div className="Weather">
             <form onSubmit={handleSubmit}>
            <div className="row">
               <div className="col-9">
                    <input type="search"
                     placeholder="Enter a city" 
                     className="form-control" 
                     autoFocus="on"
                     onChange={handleCityChange}
                    />
               </div>
               <div className="col-3">
                   <input type="submit"
                    value="Search"  
                    className="btn btn-primary w-100"/>
                </div> 
            </div>
            </form>
            <WeatherInfo data={weatherData} />
           
           
           
        </div>
    );
   } else {
     search();
     return "Loading...";
 }
}