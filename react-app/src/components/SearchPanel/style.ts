import {makeStyles} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
    search: {
        flex: 1,
        fontSize: 24,
        lineHeight: 1.4,
        fontWeight: 500,
        color: grey[800],
    },
    wrapper: {
        display: 'flex',
        padding: '8px 16px',
        flexDirection: 'row',
        backgroundColor: '#FEFEFE',
    },
    toggler: {
        padding: '0 15px 0 0',
    },
    activeToggler: {
        color: `${grey[900]} !important`,
    },
});
