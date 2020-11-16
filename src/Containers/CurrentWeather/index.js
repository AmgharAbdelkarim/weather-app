import React, {useContext} from 'react';
import Card from '../../Components/Card-xs-4';
import { getMinutes, getHours } from '../../utils';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const Weather = () => {
  
  const {current} = useContext(FullWeatherContext); 

  const { temp, pressure, sunrise, humidity, wind_speed, sunset } = current;
  return (
    <React.Fragment>
      <Card
        temp={temp}
        pressure={pressure}
        sunrise={`${getHours(sunrise)}:${getMinutes(sunrise)}`}
        humidity={humidity}
        windSpeed={wind_speed}
        sunset={`${getHours(sunset)}:${getMinutes(sunset)}`}
      />
    </React.Fragment>
  );
};

export default Weather;
