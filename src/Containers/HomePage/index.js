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
import { Wrapper, ContentWrapper, StyledTopography  , FullHeightGrid} from './styles';

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
        <ContentWrapper container direction="column" spacing={3} >
          <Grid xs item>
            <input
              type="text"
              value={city}
              placeholder="insert your cities"
              onChange={(e) => setCity(e.target.value)}
            />{' '}
            <button onClick={() => submit()}>submit</button>
          </Grid>
          <Grid xs item>
            <StyledTopography >
              {LocationConsumer.city}
            </StyledTopography>
          </Grid>
          <Grid xs item>
          {fullWeatherConsumer.current && (
            <FullHeightGrid alignItems="center" container>
              <Grid xs={6} item>
                  <Box  />
               
              </Grid>
              <Grid xs={6} item>
                  <Weather  />
                
              </Grid>
              </FullHeightGrid>
              )}
          </Grid>
          <Grid xs item>
            {fullWeatherConsumer.hourly.length > 0 && (
              <WeatherHourly  />
            )}
          </Grid>
          <Grid xs item>
            {fullWeatherConsumer.daily.length > 0 && (
              <WeatherDaily  />
            )}
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
