import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    counterContainer: {
      position: 'relative',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    backgroundBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '0%',
      background: 'linear-gradient(to bottom, #3f51b5, #2196f3)',
      transition: 'height 0.3s ease-in-out',
    },
    counterValue: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
      zIndex: 1,
    },
    buttonsContainer: {
      marginTop: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
      gap: theme.spacing(2),
    },
  }),
);

export default useStyles;