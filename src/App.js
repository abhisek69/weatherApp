import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
const API_KEY = 'a7ac2d3e57c2a33aa32777053125657d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // You can change to 'imperial' for Fahrenheit
        },
      });

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (

    <div className='container'>
      <h1 style={{ color: 'pink', fontSize:40 }}>Bhadwagiri Weathers</h1>
      <div className='listing'>
        <input className='searchBar'
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className='btn' onClick={getWeatherData}>Get Weather</button>
      </div>
      
        {weatherData &&<div className='fetcheddetails'> <Weather WeatherData={weatherData} /></div>}
      
    </div>




  );
}

export default App;
