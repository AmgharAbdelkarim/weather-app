import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../../Components/Card-xs-12';
import { getDays, getMonths, getHours } from '../../utils';
import { StyledTopography } from './styles';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const HourlyWeather = () => {

  const { hourlyWeather } = useContext(FullWeatherContext); 
  
  return (
  <React.Fragment>
   { hourlyWeather &&  (<React.Fragment>
      <StyledTopography>Hourly Forecast</StyledTopography>
      <Grid container spacing={1}>
        {hourlyWeather
          .filter((_, index) => index !== 0 && index % 3 === 0 && index < 27)
          .map((weather , index) => (
              <Grid xs item key={index}>
                <CardComponent
                  date={`${getDays(weather.date)} ${getMonths(weather.date)}`}
                  day={`${getHours(weather.date)}:00`}
                  icon={weather.icon}
                  temp={weather.temp}
                  humidity={weather.humidity}
                />
              </Grid>
          ))}
      </Grid>
    </React.Fragment>)
      }
      </React.Fragment>
  );
};

export default HourlyWeather;
