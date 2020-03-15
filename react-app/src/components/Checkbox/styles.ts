import { makeStyles } from '@material-ui/core/styles';
import { lightGreen, grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  root: {
    padding: 0,
    color: grey[400],
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&$checked': {
      color: lightGreen[400],
      '&:hover': {
        backgroundColor: 'transparent'
      },
    },
  },
  checked: {},
});
