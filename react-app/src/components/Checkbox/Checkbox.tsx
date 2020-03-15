import React from 'react';
import {
  Checkbox as MaterialCheckBox,
  CheckboxProps as MaterialCheckBoxProps
} from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { SvgIcon } from '@material-ui/core';
import { useStyles } from './styles';

type Icon = typeof SvgIcon;

interface CheckboxProps extends MaterialCheckBoxProps {
  icon?: Icon;
  checkedIcon?:Icon;
}

export const Checkbox: React.FC<CheckboxProps> = ({icon: Icon = CircleUnchecked, checkedIcon: CheckedIcon = CircleChecked, ...props}) => {
  const style = useStyles();
  return (
    <MaterialCheckBox
      icon={<Icon/>}
      checkedIcon={<CheckedIcon/>}
      classes={{root: style.root, checked: style.checked}}
      {...props}
    />
  );
};
