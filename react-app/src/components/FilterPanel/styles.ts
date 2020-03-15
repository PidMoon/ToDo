import {makeStyles} from '@material-ui/core';
import { grey, deepOrange } from '@material-ui/core/colors';

export const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        padding: '12px 16px',
        color: grey[700],
    },
    filters: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    filter: {
        color: grey[700],
    },
    activeFilter: {
        border: `solid 1px ${deepOrange[100]}`,
    }
})