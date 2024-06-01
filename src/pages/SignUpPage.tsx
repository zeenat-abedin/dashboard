import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Alert
} from "@mui/material";
import { LockOutlined } from '@mui/icons-material';
import { signup, isAuthenticated } from '../utils/auth';

interface SignUpProps {}

const SignUpPage: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate()
  const handleSubmit = (userData: any) => {
    signup(userData).then((success: any) => {
      if (success) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate('/'); 
        }, 2000);
      }
    });
  };

 
  return (
    <>
      <div className="signInPageBackground">
      <div className="overlayGradient">
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          className="glassmorphicBackground"
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Signup</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />               
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />                
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Signup
            </Button>
          </Box>
        </Box>
      {showSuccessMessage && (
        <Alert severity="success" onClose={() => setShowSuccessMessage(false)}>
          Signup successful! Redirecting...
        </Alert>
      )}
      </Container>
      </div>
      </div>
    </>
  );
};

export default SignUpPage;