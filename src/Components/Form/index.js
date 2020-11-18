import React from 'react';
import { StyledInput } from './styles';


const Form = ({ changeHandler, submit }) => {
    
    return (
    <form onSubmit={submit} >
        <StyledInput   id="city" variant="outlined"  placeholder="Enter your city" onChange={changeHandler}  fullWidth/>
    </form>
    )
};

export default Form;