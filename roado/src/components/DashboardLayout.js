import React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import Navbar from 'src/components/Dashboard/Navbar';
import Sidebar from './Dashboard/Sidebar';

const DashboardLayout = ({ mainContent }) => {
  return (
    <>
      <CssBaseline />
      <Box display="flex" sx={{ backgroundColor: '#f7faff' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, maxWidth: 'calc(100% - 600px)', p: 4 }}>
          {mainContent}
        </Box>
        <Box component="aside" sx={{ width: '525px', borderLeft: '1px solid #e0e0e0', overflow: 'auto' }}>
          <Sidebar />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
