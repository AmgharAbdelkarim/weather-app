import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../../Components/Card-xs-12';
import { getDays, getMonths, getHours } from '../../utils';
import { StyledTopography } from './styles';

const WeatherHourly = ({ weather }) => {
  return (
    <React.Fragment>
      <StyledTopography>Hourly Forecast</StyledTopography>
      <Grid container spacing={1}>
        {weather
          .filter((_, index) => index !== 0 && index % 3 === 0 && index < 27)
          .map((day) => (
            <React.Fragment key={day}>
              <Grid xs item>
                <CardComponent
                  date={`${getDays(day.dt)} ${getMonths(day.dt)}`}
                  day={`${getHours(day.dt)}:00`}
                  icon={day.weather[0].icon}
                  temp={day.temp}
                  humidity={day.humidity}
                />
              </Grid>
            </React.Fragment>
          ))}
      </Grid>
    </React.Fragment>
  );
};

export default WeatherHourly;
