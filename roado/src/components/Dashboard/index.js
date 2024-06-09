import * as React from 'react';
import Grid from '@mui/material/Grid';
import DashboardLayout from '../DashboardLayout';
import DashboardCard from './DashboardCard';
import QuickActions from './QuickActions';
import HighPriorityAlerts from './HighPriorityAlerts';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const DashboardHeader = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
    <Typography variant="h4" >
      Dashboard
    </Typography>
    <Box display="flex" alignItems="center">
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Box>
  </Box>
);

const ViewAllLink = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2, mb: 2 }}>
    <Typography variant="h5" >
      High Priority Alerts (14)
    </Typography>
    <IconButton size="small" edge="start" aria-label="view all">
      View All <ArrowForwardIosIcon fontSize="inherit" />
    </IconButton>
  </Box>
);


const Dashboard = () => {
  const mainContent = (
    <div>
      <DashboardHeader />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>

          <DashboardCard
            title="Orders"
            totalValue="123456"
            items={[
              { label: "Upcoming", value: 50, color: 'upcoming' },
              { label: "Ongoing", value: 100, color: 'ongoing' },
              { label: "Completed", value: 50, color: 'completed' }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Trips"
            totalValue="123456"
            items={[
              { label: "Upcoming", value: 50, color: 'upcoming' },
              { label: "Ongoing", value: 100, color: 'ongoing' },
              { label: "Completed", value: 50, color: 'completed' }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Revenue"
            totalValue="123456"
            items={[
              { label: "Upcoming", value: 50, color: 'upcoming' },
              { label: "Ongoing", value: 100, color: 'ongoing' },
              { label: "Completed", value: 50, color: 'completed' }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Expenses"
            totalValue="123456"
            items={[
              { label: "Freight Charges", value: 50, color: 'upcoming' },
              { label: "Driver Charges", value: 100, color: 'ongoing' },
              { label: "Other Charges", value: 50, color: 'completed' }
            ]}
          />
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Quick Actions
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <QuickActions />
        </Grid>
      </Grid>
      <ViewAllLink />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HighPriorityAlerts />
        </Grid>
      </Grid>
    </div>
  );

  return (
    <DashboardLayout mainContent={mainContent} />
  );
}

export default Dashboard;
