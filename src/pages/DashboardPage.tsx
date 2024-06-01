import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Counter from '../components/Counter/Counter';
import Dashboard from '../components/Dashboard/Dashboard';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';
import UserDataForm from '../components/UserDataForm/UserDataForm';
import { signOut } from '../firebaseConfig';


const useStyles = makeStyles({
  h1Style: {
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    fontFamily: 'sans-serif',
    fontSize: '30px'
  },
});


const DashboardPage: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false)

const handleLogout = async () => {
  try {
    await signOut();
    navigate('/');
  } catch (error) {
    console.error("Failed to log out:", error);
  }
};

  if(isChecking) return (
    <div>
      <h1>Checking...</h1>
    </div>
  )

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