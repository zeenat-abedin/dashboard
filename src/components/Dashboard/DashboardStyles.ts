import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4),
    },
    counterContainer: {
      marginBottom: theme.spacing(4),
    },
    chartContainer: {
      width: '100%',
      maxWidth: 800,
    },
    userProfileContainer: {
      marginTop: theme.spacing(4),
      width: '100%',
      maxWidth: 400,
    },
    userProfileCard: {
      padding: theme.spacing(2),
    },
    userProfileAvatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
  }),
);

export default useStyles;