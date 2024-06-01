import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addUserData } from '../../store/userDataSlice';
import StorageUtils from '../../utils/storageUtils';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useStyles from './DashboardStyles';

interface UserData {
  name: string;
  email: string;
  address: string;
  phone: string;
  id: string;  
}

const Dashboard: FC = () => {
  const classes = useStyles();
  const userData = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'User Profile Views',
        data: [65, 59, 80, 81, 56, 55, 40, 75, 90, 65, 70, 85],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  useEffect(() => {
    const lsUserData: UserData = StorageUtils.getFromLocalStorage('userData');
    if (lsUserData && Object.keys(lsUserData).length) {
      dispatch(addUserData(lsUserData));
    }
  }, [dispatch]);

  console.log('userData', userData);

  return (
    <Box className={classes.root}>
      <div className={classes.userProfileContainer}>
        <Card className={classes.userProfileCard}>
          <CardContent>
            <Avatar
              className={classes.userProfileAvatar}
              alt="User Avatar"
              src="https://avatar.iran.liara.run/public"
            />
            <Typography variant="h6" component="h2">
              {userData ? userData.name : 'Loading...'}
            </Typography>
            <Typography color="textSecondary">{userData ? userData.email : 'Loading...'}</Typography>
            <Typography variant="body2" gutterBottom>
              {userData ? userData.address : 'Loading...'}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {userData ? userData.phone : 'Loading...'}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.chartContainer}>
        <Typography variant="h6" gutterBottom>
          User Profile Trend
        </Typography>
        <Bar data={chartData} />
      </div>
    </Box>
  );
};

export default Dashboard;

Chart.register(...registerables);