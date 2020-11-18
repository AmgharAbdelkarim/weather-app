import React, { useEffect, useContext, useState } from 'react';
import DailyWeather from '../DailyWeather';
import HourlyWeather from '../HourlyWeather';
import CurrentWeather from '../CurrentWeather';
import Box from './box';
import { Grid } from '@material-ui/core';
import Form from '../../Components/Form';
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
import { Wrapper, StyledTopography, FullHeightGrid , GridAlignCenter , ContentWrapper , LinkedInLink , GithubLink } from './styles';
import { linkedInUrl, githubUrl } from "../../utils";

const Home = () => {
  const [city, setCity] = useState('');

  const LocationConsumer = useContext(locationContext);
  const useDispatchLocation = useContext(dispatchLocation);

  const fullWeatherConsumer = useContext(FullWeatherContext);
  const useDispatchFullWeather = useContext(DispatchFullWeather);

  const submit = (e) => {
    e.preventDefault();
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
        <Grid container>
          <Grid item xs={6}>
        <StyledTopography variant="h1">WEATHER APP</StyledTopography></Grid>
          <Grid item xs={6}>
            <GithubLink onClick={() => window.open(githubUrl)} />
            <LinkedInLink onClick={()=>window.open(linkedInUrl)} />
          </Grid>
        </Grid>
        <ContentWrapper container direction="column" justify="center" spacing={3} >
          <GridAlignCenter xs={6} item>
            <Form submit={submit}  changeHandler={(e) => setCity(e.target.value)}  />
          </GridAlignCenter>
          {
          !fullWeatherConsumer.isLoading ?  
            <React.Fragment>
              <Grid item>
                <StyledTopography >
                  {LocationConsumer.city}
                </StyledTopography>
              </Grid>
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
              : city ? 
              <React.Fragment>isLoading ...</React.Fragment>  : null
          }
          
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
