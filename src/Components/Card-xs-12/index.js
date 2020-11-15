import React from 'react';
import { Grid } from '@material-ui/core';
import {
  ItemsWrapper,
  ContentWrapper,
  StyledTopography,
  IconWrapper,
} from './styles';

const CardComponent = ({ date, day, icon, temp, humidity }) => {
  return (
    <ItemsWrapper>
      <ContentWrapper spacing={1} alignItems="center" container>
        <Grid xs={12} item>
          <StyledTopography>{date}</StyledTopography>
        </Grid>
        <Grid xs={12} item>
          <StyledTopography>{day}</StyledTopography>
        </Grid>
        <Grid xs={12} item>
          <IconWrapper>
            <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
          </IconWrapper>
        </Grid>
        <Grid xs={12} item>
          <StyledTopography>{temp}°</StyledTopography>
        </Grid>
        <Grid xs={12} item>
          <StyledTopography>{humidity}%</StyledTopography>
        </Grid>
      </ContentWrapper>
    </ItemsWrapper>
  );
};

export default CardComponent;
