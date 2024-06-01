import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addUserData } from '../../store/userDataSlice';
import UnsavedAlertDialog from './UnsavedAlertDialog';


interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserDataForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<UserData>({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (unsavedChanges) {
      e.preventDefault();
      setShowDialog(true);
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, [unsavedChanges]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { ...formData, id: uuidv4() };
    dispatch(addUserData(userData));
    setUnsavedChanges(false);
  };

  return (
    <>
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        User Data Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
      </Box>
      {showDialog &&
        <UnsavedAlertDialog showDialog={showDialog} setShowDialog={setShowDialog} />
      }
    </>
  );
};

export default UserDataForm;