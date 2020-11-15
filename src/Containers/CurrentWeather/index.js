import React from 'react';
import Card from '../../Components/Card-xs-4';
import { getMinutes, getHours } from '../../utils';

const Weather = ({ weather }) => {
  const { temp, pressure, sunrise, humidity, wind_speed, sunset } = weather;
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
