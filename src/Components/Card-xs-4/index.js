import React from 'react';
import { Grid } from '@material-ui/core';
import { ItemsWrapper, ContentWrapper, StyledTopography } from './styles';

const Card = ({ temp, pressure, sunRise, humidity, windSpeed, sunSet }) => {
  return (
    <ItemsWrapper>
      <ContentWrapper alignItems="center" spacing={3} container>
        <Grid xs={4} item>
          <StyledTopography>Temp</StyledTopography>
          <StyledTopography>{temp}°</StyledTopography>
        </Grid>
        <Grid xs={4} item>
          <StyledTopography>Pressure</StyledTopography>
          <StyledTopography>{pressure} hPa</StyledTopography>
        </Grid>
        <Grid xs={4} item>
          <StyledTopography>Sunrise</StyledTopography>
          <StyledTopography>{sunRise}</StyledTopography>
        </Grid>
        <Grid xs={4} item>
          <StyledTopography>Humidity</StyledTopography>
          <StyledTopography>{humidity}%</StyledTopography>
        </Grid>
        <Grid xs={4} item>
          <StyledTopography>Wind-speed</StyledTopography>
          <StyledTopography>{windSpeed} metre/sec</StyledTopography>
        </Grid>
        <Grid xs={4} item>
          <StyledTopography>Sunset</StyledTopography>
          <StyledTopography>{sunSet}</StyledTopography>
        </Grid>
      </ContentWrapper>
    </ItemsWrapper>
  );
};

export default Card;
