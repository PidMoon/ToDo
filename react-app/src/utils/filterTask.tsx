import { TaskProps } from '../components/Task';
import {Filter} from '../components/FilterPanel';

export function filterTask(items: TaskProps[], filter: Filter): TaskProps[] {
    switch (filter) {
        case 'ACTIVE': {
            return items.filter(f => !f.isCompleted); 
        }

        case 'COMPLETED': {
            return items.filter(f => !!f.isCompleted);
        }

        default: {
            return items;
        }
    }
}