import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const Root = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  marginTop: theme.spacing(4),
}));

export const EditorContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #ddd',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius, 
}));

export const ToolbarContainer = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid #ddd',
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
}));

export const ToolbarButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  '&:last-child': {
    marginRight: 0,
  },
  minWidth: 'auto', 
  padding: theme.spacing(0.5, 1), 
}));

export const EditorContent = styled(Box)(({ theme }) => ({
  minHeight: 300,
  maxHeight: 500,
  overflowY: 'auto',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper, 
  borderRadius: theme.shape.borderRadius, 
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`, 
  },
}));

export const SaveButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  fontWeight: theme.typography.fontWeightBold, 
}));


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       maxWidth: 800,
//       margin: '0 auto',
//       marginTop: theme.spacing(4),
//     },
//     editorContainer: {
//       border: '1px solid #ddd',
//       padding: theme.spacing(2),
//       marginBottom: theme.spacing(2),
//     },
//     toolbarContainer: {
//       borderBottom: '1px solid #ddd',
//       paddingBottom: theme.spacing(1),
//       marginBottom: theme.spacing(1),
//     },
//     toolbarButton: {
//       marginRight: theme.spacing(1),
//     },
//     editorContent: {
//       minHeight: 300,
//       maxHeight: 500,
//       overflowY: 'auto',
//       padding: theme.spacing(1),
//     },
//     saveButton: {
//       marginTop: theme.spacing(2),
//     },
//   }),
// );

