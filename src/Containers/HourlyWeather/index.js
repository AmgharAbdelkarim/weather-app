import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../../Components/Card-xs-12';
import { getDays, getMonths, getHours } from '../../utils';
import { StyledTopography } from './styles';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const WeatherHourly = () => {

  const { hourly } = useContext(FullWeatherContext); 
  
  return (
  <React.Fragment>
   { hourly &&  (<React.Fragment>
      <StyledTopography>Hourly Forecast</StyledTopography>
      <Grid container spacing={1}>
        {hourly
          .filter((_, index) => index !== 0 && index % 3 === 0 && index < 27)
          .map((day , index) => (
              <Grid xs item key={index}>
                <CardComponent
                  date={`${getDays(day.dt)} ${getMonths(day.dt)}`}
                  day={`${getHours(day.dt)}:00`}
                  icon={day.weather[0].icon}
                  temp={day.temp}
                  humidity={day.humidity}
                />
              </Grid>
          ))}
      </Grid>
    </React.Fragment>)
      }
      </React.Fragment>
  );
};

export default WeatherHourly;
