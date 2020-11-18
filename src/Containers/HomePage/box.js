import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import { StyledTopography, StyledImage , FullHeightGrid , FeelsLikeTopography} from './styles';
import {
  FullWeatherContext,
} from '../../context/FullWeatherContext';

const Box = () => {
  const { currentWeather } = useContext(FullWeatherContext); 
  const { feelsLike, description, weatherIcon } = currentWeather;
  return (
  <React.Fragment>
    <FullHeightGrid container alignItems="center" >
      <Grid item xs={6}>
        <StyledImage
          alt=""
          src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        />
      </Grid>
      <Grid item xs={6}>
        <FeelsLikeTopography>{feelsLike}°</FeelsLikeTopography>
        <StyledTopography >
          {description}
        </StyledTopography>
      </Grid>
    </FullHeightGrid>
  </React.Fragment>
)};
export default Box;
