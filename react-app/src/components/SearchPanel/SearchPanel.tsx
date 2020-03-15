import React, {useState} from 'react';
import cn from 'classnames';
import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './style';

interface SearchPanelProps {
  isDoneAll: boolean;
  addItem(value: string): void;
  toggleAll(toggleAll: boolean): void;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({isDoneAll, addItem, toggleAll}) => {
    const {wrapper, search, toggler, activeToggler} = useStyles();
    const [taskLabel, setTaskLabel] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTaskLabel(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (taskLabel) {
            addItem(taskLabel);
            setTaskLabel('');
        }

        e.preventDefault();
    };

    return (
        <form  className={wrapper} onSubmit={onSubmit}>
            <Checkbox 
                checked={isDoneAll}
                onClick={() => toggleAll(!isDoneAll)}
                icon={ExpandMoreIcon}
                className={cn(toggler, {[activeToggler]: isDoneAll})}
                checkedIcon={ExpandMoreIcon}
            />
            <Input
                value={taskLabel}
                onChange={onChange}
                className={search}
                placeholder="What needs to be done?"
            />
        </form>
    );
};
