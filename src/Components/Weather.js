import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();

    let display = useSelector(selectDisplay)
    let latitude = display.capitalInfo.latlng[0]
    let longitude = display.capitalInfo.latlng[1]


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude}, ${longitude}`},
            headers: {
              'X-RapidAPI-Key': '94b042dd24msh4e511d21bef32cfp156926jsnb06057064cde',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };
          axios.request(options).then(function (response) {
            console.log(response.data, 'axios.request ')
            setWeather(response.data);
        }).catch(function (error) {
            console.error(error, 'error at catch within the useEffect');
        })
        }, [])

    return (
        <div>
            <table className="overview-table">

                <tr>
                    <td>Conditions: {weather?.current?.condition?.text}</td>
                   
                </tr>
                <br></br>
                <tr>
                    <td>Temperature: {weather?.current.temp_f} degrees Fahrenheit</td>
                  
                </tr>
                <br></br>
                <tr>
                    <td>Feels Like: {weather?.current.temp_f}</td>
                  
                </tr>
                <br></br>
                <tr>
                    <td>Humidity: {weather?.current?.humidity}</td>
                   
                </tr>
                <br></br>
                <tr>
                    <td>Wind Speed: {weather?.current?.wind_mph}mph, {weather?.current?.wind_dir} in direction </td>
          
                </tr>
            </table>
        </div>
    );
};

export default Weather;
