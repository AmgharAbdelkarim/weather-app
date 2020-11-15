import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';
import BackgroundImage from '../../utils/images/2850815.246c1201.jpg';

export const Wrapper = styled(Box)`
  background-image: url(${BackgroundImage});
  height: 100vh;
  background-size: cover;
  padding: 16px;
`;

export const ContentWrapper = styled(Grid)`
  height: 100%;
`;

export const StyledTopography = styled(Typography)`
  font-size: 23px !important;
  color: #fff;
  font-weight: 400;
`;
export const StyledImage = styled.img`
  float: right;
`;
