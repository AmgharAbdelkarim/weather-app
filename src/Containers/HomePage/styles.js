import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';
import BackgroundImage from '../../utils/images/2850815.246c1201.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const Wrapper = styled(Box)`
  background-image: url(${BackgroundImage});
  min-height: 900px;
  background-size: cover;
  padding: 16px 20px;
`;

export const GridAlignCenter = styled(Grid)`
align-self : center;
width:100%;
`;

export const ContentWrapper = styled(Grid)`
min-height:600px;
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

export const GithubLink = styled(GitHubIcon)`
  float : right;
  padding : 0px 10px;
  cursor: pointer;
`;
export const LinkedInLink = styled(LinkedInIcon)`
  float : right;
  padding : 0px 10px;
  cursor: pointer;
`;