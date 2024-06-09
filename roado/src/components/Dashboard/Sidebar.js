import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Link } from '@mui/material';

const Sidebar = () => {
  return (
    <Box bgcolor="background.default" p={2}>
      <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
        Todays Highlights (14)
        <Typography variant="caption" display="block" gutterBottom>
          19 Mar 2024
        </Typography>
      </Typography>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Paper elevation={1} sx={{ width: '48%', borderRadius: '10px', p: 2, bgcolor: 'white' }}>
          <Typography variant="subtitle1" sx={{ color: '#6E6E73' }}>Income</Typography>
          <Typography variant="h6" sx={{ color: 'green', fontWeight: 'bold' }}>100000 CAD</Typography>
          <Typography variant="body2" sx={{ color: '#6E6E73' }}>2 payments received</Typography>
        </Paper>
        <Paper elevation={1} sx={{ width: '48%', borderRadius: '10px', p: 2, bgcolor: 'white' }}>
          <Typography variant="subtitle1" sx={{ color: '#6E6E73' }}>Expenses</Typography>
          <Typography variant="h6" sx={{ color: 'red', fontWeight: 'bold' }}>50000 CAD</Typography>
          <Typography variant="body2" sx={{ color: '#6E6E73' }}>5 payments paid</Typography>
        </Paper>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', display: 'inline' }}>
          Completed Activities (14)
        </Typography>
        <Link href="#" underline="none" sx={{ float: 'right' }}>View All</Link>
      </Box>
      <TableContainer component={Paper} elevation={0} sx={{ border: 0.5, borderColor: 'grey.500', borderRadius: '5px' }}>
        <Table aria-label="completed activities table">
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><a style={{color:'#1A3875'}}>Gurpreet Singh</a> (Dispatch team) has created <b>Load No. I-I-AAA-1325</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><a style={{color:'#1A3875'}}>Aman</a>  (Driver) <b>Picked Up</b> goods at <b>Location_Name for Load No. I-I-AAA-1325</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><a style={{color:'#1A3875'}}>Gurpreet Singh</a>(Dispatch team) has created <b>Load No. I-I-AAA-1325</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><b>Load No. I-I-AAA-1325</b> will start added by <a style={{color:'#1A3875'}}>Gurpreet Singh</a></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', display: 'inline' }}>
          Scheduled Activities (14)
        </Typography>
        <Link href="#" underline="none" sx={{ float: 'right' }}>View All</Link>
      </Box>
      <TableContainer component={Paper} elevation={0} sx={{ border: 0.5, borderColor: 'grey.500', borderRadius: '5px' }}>
        <Table aria-label="scheduled activities table">
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><b>Load No. I-I-AAA-1325</b> will be delivered by <a style={{color:'#1A3875'}}>Aman</a>  (Driver)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><a style={{color:'#1A3875'}}>Aman</a> (Driver) will Picked Up goods at Location_Name for <b>Load No. I-I-AAA-1325</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><b>Load No. I-I-AAA-1325</b> will start added by <a style={{color:'#1A3875'}}>Gurpreet Singh</a></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#6E6E73' }}><b>Load No. I-I-AAA-1325</b> will start added by <a style={{color:'#1A3875'}}>Gurpreet Singh</a></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Sidebar;
