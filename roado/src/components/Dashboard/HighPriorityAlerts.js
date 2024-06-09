import React from 'react';
import AlertCard from './AlertCard';
import Grid from '@mui/material/Grid';

const alerts = [
  {
    title: 'Driver Raised Concern',
    subtitle: 'Load No: 12454, Bill To: RoaDo demo Bangalore',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '13 Feb 24',
  },
  {
    title: 'Reefer Temp. out of range',
    subtitle: 'Load No: 12454, Bill To: RoaDo demo Bangalore',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: '13 Feb 24',
  },
];

const HighPriorityAlerts = () => (
  <Grid container spacing={54}> {/* Adjusted spacing for more space between cards */}
    {alerts.map((alert, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}> {/* Adjusted breakpoints for better responsiveness */}
        <AlertCard
          title={alert.title}
          subtitle={alert.subtitle}
          description={alert.description}
          date={alert.date}
        />
      </Grid>
    ))}
  </Grid>
);

export default HighPriorityAlerts;
