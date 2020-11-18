import React, {useContext} from 'react';
import Card from '../../Components/Card-xs-4';
import { getMinutes, getHours } from '../../utils';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const CurrentWeather = () => {
  
  const {currentWeather} = useContext(FullWeatherContext); 

  const { temp, pressure, sunRise, humidity, windSpeed,  sunSet } = currentWeather;
  return (
    <React.Fragment>
      <Card
        temp={temp}
        pressure={pressure}
        sunRise={`${getHours(sunRise)}:${getMinutes(sunRise)}`}
        humidity={humidity}
        windSpeed={windSpeed}
        sunSet={`${getHours(sunSet)}:${getMinutes(sunSet)}`}
      />
    </React.Fragment>
  );
};

export default CurrentWeather;
