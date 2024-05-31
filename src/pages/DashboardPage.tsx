import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { getUser } from '../utils/auth';
import Counter from '../components/Counter/Counter';
import Dashboard from '../components/Dashboard/Dashboard';
import UserDataForm from '../components/UserDataForm/UserDataForm';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';
import { signOut } from '../firebaseConfig';

interface User {
  email: string;
}

const useStyles = makeStyles({
  h1Style: {
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    fontFamily: 'sans-serif',
    fontSize: '30px'
  },
  userProfileTrendStyle: {
    marginTop: '40px',
  },
});


const DashboardPage: FC = () => {
  const user: User = getUser();
  const classes = useStyles();
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut();
    navigate('/'); 
  } catch (error) {
    console.error("Failed to log out:", error);
  }
};


  return (
    <div style={{ position: 'relative', width: '100%' }}>
    <div style={{ position: 'absolute', top: 16, right: 16 }}>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div> 
      <h1 className={classes.h1Style}>Dashboard</h1>
      <Counter />
      <RichTextEditor />
      <UserDataForm/>
      <Dashboard/>
    </div>
  );
};

export default DashboardPage;