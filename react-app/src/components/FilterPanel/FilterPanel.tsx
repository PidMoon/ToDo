import React from 'react';
import cn from 'classnames';
import { Typography, Button } from '@material-ui/core';
import {useStyles} from './styles';

interface FilterProps {
    title: Filter;
    isActive: boolean;
    onClick(): void;
};

interface FilterPanelProps {
    filters: Filter[];
    activeFilter: Filter;
    inProgressTask: number;
    handleFilterClick(filter: string): () => void;
}

export type Filter = 'All' | 'ACTIVE' | 'COMPLETED';

export const Filter: React.FC<FilterProps> = ({title, onClick, isActive}) => {
    const {filter, activeFilter} = useStyles();

    return (
        <Button size='small' children={title} onClick={onClick} className={cn(filter, {[activeFilter]: isActive})} />
    )
}

export const FilterPanel: React.FC<FilterPanelProps> = ({filters, inProgressTask, handleFilterClick, activeFilter}) => {
    const notCompletedTask = `${inProgressTask || 0} items left`;
    const styles = useStyles();

    return (
        <div className={styles.wrapper}>
            <Typography children={notCompletedTask} variant='subtitle1' display='inline' />
            <div className={styles.filters}>
                {filters.map(f => {
                    const onClick = handleFilterClick(f);

                    return <Filter key={f} onClick={onClick} title={f} isActive={f === activeFilter} />
                })}
            </div>     
        </div>
    )
};
