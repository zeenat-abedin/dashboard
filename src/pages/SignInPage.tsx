import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { authenticate } from '../utils/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import '../globalStyles.css'

interface SignInProps {}
interface Errors {
  emailError?: string;
  passwordError?: string;
}

const SignInPage: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({ emailError: '', passwordError: '' });

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const validateFields = () => {
  if (!email.trim() ||!password.trim()) {
    if (!email.trim()) {
      setErrors({...errors, emailError: 'Email is required.' });
    }
    if (!password.trim()) {
      setErrors({...errors, passwordError: 'Password is required.' });
    }
    return false;
  }
  setErrors({ emailError: '', passwordError: '' });
  return true;
};

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Submitting form");
    if (!validateFields()) {
      console.log("Validation failed");
      return;
    }
    console.log("Validating fields");
    authenticate({ email });
    console.log("Navigating to dashboard");
    navigate('/dashboard');
  };

const handleGoogleSignIn = (): void => {
  signInWithPopup(auth, provider)
    .then((result: any) => {
      const idToken: string | undefined = result.user?.accessToken;
      if (idToken) {
        console.log(idToken);
        authenticate({ idToken });
        navigate('/dashboard');
      } else {
        console.error('ID token is null.');
      }
    })
    .catch((error: any) => {
      const errorMessage: string = error.message;
      console.error(errorMessage);
    });
};

  return (
    <>
      <div className="signInPageBackground">
      <div className="overlayGradient" >
      <Container maxWidth="xs" >
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
          <Typography variant="h5">Login</Typography>
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
              error={!!errors.emailError}
              helperText={errors.emailError}
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
              error={!!errors.passwordError}
              helperText={errors.passwordError}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleGoogleSignIn}
          >
          Sign In with Google
          </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Box sx={{ pt: 2, pb: 2, pr: 2, pl: 2 }}>
                 <Link to="/signup">Don't have an account? Signup</Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </div>
      </div>
    </>
  );
};

export default SignInPage;