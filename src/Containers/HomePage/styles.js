import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';
import BackgroundImage from '../../utils/images/2850815.246c1201.jpg';

export const Wrapper = styled(Box)`
  background-image: url(${BackgroundImage});
  min-height: 900px;
  background-size: cover;
  padding: 16px 20px;
`;

export const ContentWrapper = styled(Grid)`
  /* height: 100%; */
`;

export const StyledTopography = styled(Typography)`
  font-size: 26px !important;
  color: #fff;
  font-weight: bold !important;
  padding: 5px 10px;
`;
export const FeelsLikeTopography = styled(Typography)`
  font-size: 35px !important;
  color: #fff;
  font-weight: bold !important;
`;

export const StyledImage = styled.img`
  height:120px;
  width:120px;
  float: right;
`;

export const FullHeightGrid = styled(Grid)`
  height: 100%;
`;

