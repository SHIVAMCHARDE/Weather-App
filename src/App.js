import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'
export default function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  })
  const handleClick = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9336e841a9cd30881e3a21ab432c1a4c`)
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
        })
      })
  }
  return (<>
    <div className='container text-center my-2'>
    
      <h1> Weather App Using React JS</h1>
      <input type="text" className='from-control' value={city} onChange={(e) => {
        setCity(e.target.value);
      }}/>
      <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>get temp</button>

    </div>
    <ShowTemp text ={data}></ShowTemp>
    </>
  )
}
