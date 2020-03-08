import React from 'react';
import {Button as MaterialButton} from '@material-ui/core';

interface ButtonProps {
    size: 'small' | 'medium';
    label: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
}

export const Button: React.FC<ButtonProps> =  ({label, ...props}) => {
    return (
        <MaterialButton {...props} children={label} color='secondary' variant='outlined' />
    )  
}
