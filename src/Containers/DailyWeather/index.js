import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../../Components/Card-xs-12';
import { getDays, getMonths, getDay } from '../../utils';
import { StyledTopography } from './styles';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const WeatherDaily = () => {

  const { daily } = useContext(FullWeatherContext); 

  return (
    <React.Fragment>
      { daily && <React.Fragment>
        <StyledTopography>Daily Forecast</StyledTopography>
        <Grid container spacing={1}>
          {daily.map((day , index) => (
              <Grid xs item key={index}>
                <CardComponent
                  date={`${getDays(day.dt)} ${getMonths(day.dt)}`}
                  day={getDay(day.dt)}
                  icon={day.weather[0].icon}
                  temp={day.temp.day}
                  humidity={day.humidity}
                />
              </Grid>
          ))}
        </Grid>
      </React.Fragment>}
      </React.Fragment>
  );
};

export default WeatherDaily;
