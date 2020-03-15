import React from 'react';
import { TaskProps, Task } from '../Task';
import { useStyles } from './style';

interface TaskListProps {
  task: TaskProps[];
  handleDelete(id: number): () => void;
  handleToggle(id: number): () => void;
}

export const TaskList: React.FC<TaskListProps> = ({ task, handleDelete, handleToggle }) => {
  const style = useStyles();

  return (
  <div className={style.wrapper}>
      {task.map(t => {
        const onDelete = handleDelete(t.id);
        const onToggle = handleToggle(t.id)

        return <Task {...t} onDelete={onDelete} key={t.id} onToggle={onToggle}/>;
      })}
    </div>
  );
};
