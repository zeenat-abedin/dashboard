import { Box, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

interface UnsavedAlertDialogProps {
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
}


 const UnsavedAlertDialog: React.FC<UnsavedAlertDialogProps> = ({showDialog, setShowDialog}) => {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
        <Dialog
        open={showDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"You have unsaved changes!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you leave now, your changes will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Stay on this page
          </Button>
          <Button onClick={() => window.location.reload()} color="primary" autoFocus>
            Leave and reload
          </Button>
        </DialogActions>
      </Dialog>
  </Box>
)
}

export default UnsavedAlertDialog