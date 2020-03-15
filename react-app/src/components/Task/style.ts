import {grey, red} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    label: {
        fontSize: 24,
        lineHeight: 1.2,
        color: grey[800],
    },
    input: {
        flex: 1,
    },
    checkbox: {
        marginRight: 20,
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0',
        '&:hover button': {
            color: red[300],
            visibility: 'visible',
        },
    },
    button: {
        visibility: 'hidden',
    }
})
