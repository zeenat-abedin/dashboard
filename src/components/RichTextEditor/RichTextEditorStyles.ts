import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      margin: '0 auto',
      marginTop: theme.spacing(4),
    },
    editorContainer: {
      border: '1px solid #ddd',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    toolbarContainer: {
      borderBottom: '1px solid #ddd',
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    toolbarButton: {
      marginRight: theme.spacing(1),
    },
    editorContent: {
      minHeight: 300,
      maxHeight: 500,
      overflowY: 'auto',
      padding: theme.spacing(1),
    },
    saveButton: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default useStyles;