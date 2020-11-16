import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import { StyledTopography, StyledImage , FullHeightGrid , FeelsLikeTopography} from './styles';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const Box = () => {
  const { current } = useContext(FullWeatherContext); 
  
  return (
  <React.Fragment>
    <FullHeightGrid container alignItems="center" >
      <Grid item xs={6}>
        <StyledImage
          alt=""
          src={`https://openweathermap.org/img/w/${current.weather[0].icon}.png`}
        />
      </Grid>
      <Grid item xs={6}>
        <FeelsLikeTopography>{current.feels_like}°</FeelsLikeTopography>
        <StyledTopography >
          {current.weather[0].description}
        </StyledTopography>
      </Grid>
    </FullHeightGrid>
  </React.Fragment>
)};
export default Box;
