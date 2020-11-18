import React, { useEffect, useContext, useState } from 'react';
import DailyWeather from '../DailyWeather';
import HourlyWeather from '../HourlyWeather';
import CurrentWeather from '../CurrentWeather';
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
import { getFullWeather, getLatAndLonFromCity, getCityFromLatAndLon } from '../../actions';
import getCurrentLocation from '../../utils/GetCurrentLocationApi';
import { Wrapper, ContentWrapper, StyledTopography, FullHeightGrid } from './styles';


const Home = () => {
  const [city, setCity] = useState('');

  const LocationConsumer = useContext(locationContext);
  const useDispatchLocation = useContext(dispatchLocation);

  const fullWeatherConsumer = useContext(FullWeatherContext);
  const useDispatchFullWeather = useContext(DispatchFullWeather);

  const submit = () => {
    getLatAndLonFromCity(useDispatchLocation, city);
  };

  useEffect(() => {
    getCurrentLocation(getCityFromLatAndLon, useDispatchLocation);
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
          {
          !fullWeatherConsumer.isLoading ?  
            <React.Fragment>
              <Grid xs item>        
                <FullHeightGrid alignItems="center" container>
                      <Grid xs={6} item>
                          <Box  />               
                      </Grid>
                      <Grid xs={6} item>
                          <CurrentWeather />               
                      </Grid>
                </FullHeightGrid>
              </Grid>
              <Grid xs item>           
                <HourlyWeather  />          
              </Grid>
              <Grid xs item>
                <DailyWeather />
              </Grid>
            </React.Fragment>
              :
              <React.Fragment>isLoading ...</React.Fragment> 
          }
          
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
