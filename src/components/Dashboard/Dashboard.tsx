import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Typography, Box, Card, CardContent, Avatar } from '@mui/material';

import Counter from '../Counter/Counter';
import { RootState } from '../../store/store';
import useStyles from './DashboardStyles';


const Dashboard: React.FC = () => {
  const classes = useStyles();
  const userData = useSelector((state: RootState) => state.userData[0]);

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

  return (
    <Box className={classes.root}>
      {/* <div className={classes.counterContainer}>
        <Counter />
      </div> */}
      <div className={classes.chartContainer}>
        <Typography variant="h6" gutterBottom>
          User Profile Trend
        </Typography>
        <Bar data={chartData} />
      </div>
      <div className={classes.userProfileContainer}>
        <Card className={classes.userProfileCard}>
          <CardContent>
            <Avatar
              className={classes.userProfileAvatar}
              alt="User Avatar"
              src="/path/to/avatar.jpg"
            />
            <Typography variant="h6" component="h2">
              {userData? userData.name : 'Loading...'}
            </Typography>
            <Typography color="textSecondary">{userData?  userData.email : 'Loading...'}</Typography>
            <Typography variant="body2" gutterBottom>
              {userData? userData.address : 'Loading...'}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {userData? userData.phone : 'Loading...'}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default Dashboard;

Chart.register(...registerables);
