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

const SignInPage: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mockUser = { email };
    authenticate(mockUser);
    navigate('/dashboard');
  };

   const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
   .then((result: any) => {
    const idToken = result.credential.idToken;
    if (idToken) {
        console.log(idToken);
    } else {
        console.error('ID token is null.');
    }
   })
   .catch((error: any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
     console.error(errorMessage);
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

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Login
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
                <Link to="/signup">Don't have an account? Signup</Link>
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