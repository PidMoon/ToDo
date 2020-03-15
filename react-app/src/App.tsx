import React, {useState, useEffect} from 'react';
import { TaskProps } from './components/Task';
import { SearchPanel } from './components/SearchPanel';
import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import { TaskList } from './components/TaskList';
import { FilterPanel, Filter } from './components/FilterPanel';
import { Card } from '@material-ui/core'; 
import { filterTask } from './utils/filterTask';

const useStyles = makeStyles({
  title: {
    fontSize: 100,
    opacity: 0.5,
    fontWeight: 100,
    color: red[200],
    margin: '30px 0',
    alignSelf: 'center',
  },
  wrapper: {
    width: 550,
    display: 'flex',
    margin: '0 auto',
    paddingRight: 15,
    flexDirection: 'column',
  }
})


const filters: Filter[] = ['All', 'ACTIVE', 'COMPLETED'];

export function App() {
  const style = useStyles();
  const [task, setTask] = useState<TaskProps[]>([]);
  const [isDoneAll, setIsDoneAll] = useState(false);
  const [countCompleted, setCountCompleted] = useState(0);
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const hasTask = task.length;

  const handleAddItem = (label: string) => {
    setTask(() => [...task, {label, isCompleted: false, id: new Date().getTime()}])
  } 

  const handleDelete = (id: number) => () => {
    setTask(() => task.filter(t => t.id !== id))
  }

  const onToggleTask = (id: number) => () => {
    setTask(()=> task.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t));
  }

  const handleChooseFilter = (filter: Filter) =>  () => {
    setActiveFilter(filter);
  }

  const toggleAll = (isCompleted: boolean) => {
    setTask(() => task.map(t => ({...t, isCompleted})))
  }

  useEffect(() => {
    setCountCompleted(task.filter(t => !t.isCompleted).length);

    if (task.length) {
      setIsDoneAll(task.every(t => !!t.isCompleted));
    } else {
      setIsDoneAll(false);
    }
  }, [task])


  return (
    <div className={style.wrapper}>
      <Typography children='todos' variant='h2' className={style.title} />
      <Card>
        <SearchPanel isDoneAll={isDoneAll} addItem={handleAddItem} toggleAll={toggleAll} />
        {hasTask ? 
          <> 
              <TaskList task={filterTask(task, activeFilter)} handleDelete={handleDelete} handleToggle={onToggleTask} /> 
              <FilterPanel inProgressTask={countCompleted} filters={filters} handleFilterClick={handleChooseFilter} activeFilter={activeFilter}/>
          </>: null
        }
      </Card>
    </div>
  );  
}
