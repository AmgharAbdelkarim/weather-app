import styled from 'styled-components';
import {  TextField } from '@material-ui/core';


export const StyledInput = styled(TextField)`
    border-color: white ;
    border-radius : 20px ;
    background-color : white ;    
    
    .PrivateNotchedOutline-root-6 {
        border-radius : 20px ;
    }
    .MuiOutlinedInput-root.Mui-focused 
    .MuiOutlinedInput-notchedOutline {
        border-color: white;
    }
    .MuiOutlinedInput-notchedOutline {
        border-radius : 20px !important;
    }
`;