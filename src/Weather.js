import React from 'react';

const Weather = ({ WeatherData }) => {
  const { name, main, weather  } = WeatherData;

let message='';
  if(main.temp>=35){
    message='Jabar garam re bhjai😢🥵'
  }
  else if(main.temp<35 && main.temp>=30){
    message='Chaluna ice Cream khai jiba👌😁'
  }
  else if(main.temp<30 && main.temp>=25){
    message='Buliki asiba ki🤣💕'
  }
  else if(main.temp<25 && main.temp>=15){
    message='Romantic paga yaar💕'
  }
  else if(main.temp<15 && main.temp>=0){
    message='E boulo SIta🥶🥶🥶'
  }
  else{
    message='bala thick se search kar'
  }

  if(!WeatherData){
    return message='Please search correctly'
  }
  return (
    <div>
      <h2>{name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Weather: {weather[0].description}</p>
      <p>Humidity {main.humidity}</p>
      <p>{message}</p>
    </div>
  );
};

export default Weather;