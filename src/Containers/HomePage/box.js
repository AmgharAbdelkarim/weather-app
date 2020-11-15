import React from 'react';
import { Grid } from '@material-ui/core';
import { StyledTopography, StyledImage } from './styles';

const Box = ({ weather }) => (
  <React.Fragment>
    <Grid container>
      <Grid item xs={6}>
        <StyledImage
          alt=""
          src={`https://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`}
        />
      </Grid>
      <Grid item xs={6}>
        <StyledTopography>{weather.current.feels_like}°</StyledTopography>
        <StyledTopography>
          {weather.current.weather[0].description}
        </StyledTopography>
      </Grid>
    </Grid>
  </React.Fragment>
);
export default Box;
