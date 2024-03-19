import "./SearchBox.css"
import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";
import "./InfoBox.css"
import { useState } from "react";
import "./Weather.css"
function Weather(){
    const [weatherInfo,SetWeatherInfo]=useState({
    city:"",
    feelsLike: "",
    humidity: "",
    temp: "",
    tempMax: "",
    tempMin: "",
    weather: ""})

    let upDateInfo=(newInfo)=>{
        SetWeatherInfo(newInfo)
    }
    return(
        <div className="Weather">
            <h1>Weather App</h1>
            <SearchBox updateInfo={upDateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}

export default Weather;