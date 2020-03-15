import {makeStyles} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
    
export const useStyles = makeStyles({
    root: {
        '&$disabled': {
            color: grey[700],
        },
    },
    disabled: {},
})