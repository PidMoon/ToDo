import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { useStyles } from './style';

export interface TaskProps {
  id: number;
  label: string;
  isCompleted: boolean;
}

export interface TaskActionProps extends TaskProps{
  onDelete():void;
  onToggle():void;
}

export const Task: React.FC<TaskActionProps> = ({ label, onDelete, isCompleted, onToggle}) => {
  const style = useStyles();
  const [isDisabled, setIsDisabled] = useState(true);
  const [innerLabel, setInnerLabel] = useState(label); // change to context

  const onDoubleClick = () => {
    setIsDisabled(isDisabled => !isDisabled);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInnerLabel(e.target.value);
  };

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { //change to context
  //   e.preventDefault();
  // }

  return (
    <form className={style.wrapper}>
      <Checkbox className={style.checkbox} checked={isCompleted} onClick={onToggle}/>
      <Input disabled={isDisabled} onDoubleClick={onDoubleClick} className={style.input} value={innerLabel} onChange={onChange}/>
      <Button size="medium" icon={<CloseIcon />} onClick={onDelete} className={style.button} />
    </form>
  );
};
