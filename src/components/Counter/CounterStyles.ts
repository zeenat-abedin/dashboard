import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Root = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));

export const CounterContainer = styled(Box)(() => ({
  position: 'relative',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  overflow: 'hidden',
}));

export const BackgroundBar = styled(Box)(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '0%',
  background: 'linear-gradient(to bottom, #3f51b5, #2196f3)',
  transition: 'height 0.3s ease-in-out',
}));

export const CounterValue = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  zIndex: 1,
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));
