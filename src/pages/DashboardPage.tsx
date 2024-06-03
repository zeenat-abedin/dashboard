import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Counter from '../components/Counter/Counter';
import Dashboard from '../components/Dashboard/Dashboard';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';
import UserDataForm from '../components/UserDataForm/UserDataForm';
import { signOut } from '../firebaseConfig';

// Styled components
const PageContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
}));

const LogoutButtonContainer = styled(Box)(() => ({
  position: 'absolute',
  top: 16,
  right: 16,
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(2.5), // 20px
  paddingBottom: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
  marginLeft: theme.spacing(2.5),
  fontFamily: 'sans-serif',
  fontSize: '30px',
}));

const DashboardPage: FC = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  if (isChecking) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h4">Checking...</Typography>
    </Box>
  );

  return (
    <PageContainer>
      <LogoutButtonContainer>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout}
          sx={{ boxShadow: 3, '&:hover': { boxShadow: 5 } }} // Optional: Add some elevation
        >
          Logout
        </Button>
      </LogoutButtonContainer>
      <PageTitle variant="h1">Dashboard</PageTitle>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Counter />
        <RichTextEditor />
        <UserDataForm />
        <Dashboard />
      </Box>
    </PageContainer>
  );
};

export default DashboardPage;