import React from 'react';
import { Input as MUIInput } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';
import { useStyles } from './style';

export const Input: React.FC<InputProps> = (props) => {
  const style = useStyles();

  return (
    <MUIInput disableUnderline classes={{ root: style.root, disabled: style.disabled }} {...props} />
  );
};
