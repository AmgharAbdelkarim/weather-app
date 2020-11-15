import React, { useEffect, useContext, useState } from 'react';
import WeatherDaily from '../DailyWeather';
import WeatherHourly from '../HourlyWeather';
import Weather from '../CurrentWeather';
import Box from './box';
import { Grid } from '@material-ui/core';
import {
  locationContext,
  dispatchLocation,
} from '../../context/LocationContext';
import {
  FullWeatherContext,
  DispatchFullWeather,
} from '../../context/FullWeatherContext';
import { getFullWeather, getLocationPlace, getLocation } from '../../actions';
import getCurrentLocation from '../../utils/GetCurrentLocationApi';
import { Wrapper, ContentWrapper, StyledTopography } from './styles';

const Home = () => {
  const [city, setCity] = useState('');

  const LocationConsumer = useContext(locationContext);
  const useDispatchLocation = useContext(dispatchLocation);

  const fullWeatherConsumer = useContext(FullWeatherContext);
  const useDispatchFullWeather = useContext(DispatchFullWeather);

  const submit = () => {
    getLocationPlace(useDispatchLocation, city);
  };

  useEffect(() => {
    getCurrentLocation(getLocation, useDispatchLocation);
  }, [useDispatchLocation]);

  useEffect(() => {
    getFullWeather(
      useDispatchFullWeather,
      LocationConsumer.lat,
      LocationConsumer.lon
    );
  }, [LocationConsumer, useDispatchFullWeather]);

  return (
    <React.Fragment>
      <Wrapper>
        <StyledTopography variant="h1">WEATHER APP</StyledTopography>
        <ContentWrapper container spacing={4}>
          <Grid xs={12} item>
            <input
              type="text"
              value={city}
              placeholder="insert your cities"
              onChange={(e) => setCity(e.target.value)}
            />{' '}
            <button onClick={() => submit()}>submit</button>
          </Grid>
          <Grid xs={12} item>
            <StyledTopography variant="h1">
              {LocationConsumer.city}
            </StyledTopography>
          </Grid>
          <Grid xs={12} item>
            <Grid container>
              <Grid xs={6} item>
                {fullWeatherConsumer.data && (
                  <Box weather={fullWeatherConsumer.data} />
                )}
              </Grid>
              <Grid xs={6} item>
                {fullWeatherConsumer.data && (
                  <Weather weather={fullWeatherConsumer.data.current} />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            {fullWeatherConsumer.data && (
              <WeatherHourly weather={fullWeatherConsumer.data.hourly} />
            )}
          </Grid>
          <Grid xs={12} item>
            {fullWeatherConsumer.data && (
              <WeatherDaily weather={fullWeatherConsumer.data.daily} />
            )}
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
