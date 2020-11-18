import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../../Components/Card-xs-12';
import { getDays, getMonths, getDay } from '../../utils';
import { StyledTopography } from './styles';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const DailyWeather = () => {

  const { dailyWeather } = useContext(FullWeatherContext); 
  
  return (
    <React.Fragment>
      { dailyWeather && <React.Fragment>
        <StyledTopography>Daily Forecast</StyledTopography>
        <Grid container spacing={1}>
          {dailyWeather.map((weather , index) => (
              <Grid xs item key={index}>
                <CardComponent
                  date={`${getDays(weather.date)} ${getMonths(weather.date)}`}
                  day={getDay(weather.date)}
                  icon={weather.icon}
                  temp={weather.temp}
                  humidity={weather.humidity}
                />
              </Grid>
          ))}
        </Grid>
      </React.Fragment>}
      </React.Fragment>
  );
};

export default DailyWeather;
