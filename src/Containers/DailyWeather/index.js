import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../../Components/Card-xs-12';
import { getDays, getMonths, getDay } from '../../utils';
import { StyledTopography } from './styles';

const WeatherDaily = ({ weather }) => {
  return (
    <React.Fragment>
      <StyledTopography>Daily Forecast</StyledTopography>
      <Grid container spacing={1}>
        {weather.map((day) => (
          <React.Fragment key={day}>
            <Grid xs item>
              <CardComponent
                date={`${getDays(day.dt)} ${getMonths(day.dt)}`}
                day={getDay(day.dt)}
                icon={day.weather[0].icon}
                temp={day.temp.day}
                humidity={day.humidity}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default WeatherDaily;
