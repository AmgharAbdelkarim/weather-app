import styled from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';

export const ItemsWrapper = styled(Box)`
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  height: 100%;
`;

export const ContentWrapper = styled(Grid)`
  padding: 12px 16px;
  box-sizing: border-box;
  height: 100%;
`;

export const StyledTopography = styled(Typography)`
  font-size: 23px;
  color: #fff;
  font-weight: 400;
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
