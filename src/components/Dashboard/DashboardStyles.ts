import { styled } from '@mui/material/styles';
import { Box, Card, Avatar } from '@mui/material';

export const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

export const ChartContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: 800,
}));

export const UserProfileCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const UserProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  marginBottom: theme.spacing(2),
}));
