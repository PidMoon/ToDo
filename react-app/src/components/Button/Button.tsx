import React from 'react';
import {Button as MUIButton, IconButton as MUIIconButton} from '@material-ui/core';
import {ButtonProps as MUIButtonProps} from '@material-ui/core/Button/Button'
import {useStyles} from './style';

interface ButtonProps extends MUIButtonProps {
    size?: 'small' | 'medium';
    label?: React.ReactNode;
    icon?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    className?: string;
}

export const Button: React.FC<ButtonProps> =  ({label, icon, className, ...props}) => {
    const {root} = useStyles();

    return (
        <>
            {icon ?
                <MUIIconButton {...props} children={icon} classes={{root}} className={className} disableTouchRipple />
                :<MUIButton {...props} color='secondary' variant='outlined' className={className} />
            }
        </>
    )  
}
