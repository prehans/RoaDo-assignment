import React from 'react';
import { Box, Paper, Grid, Typography, ButtonBase, Divider } from '@mui/material';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import AddVehicleIcon from '@mui/icons-material/DriveEtaOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import AddDriverIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddIndentsIcon from '@mui/icons-material/NoteAddOutlined';

const QuickActions = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ marginBlock: 3, display: 'flex', alignItems: 'center' }}>
          <ButtonBase focusRipple sx={{ width: '100%', flexDirection: 'column' }}>
            <LabelImportantTwoToneIcon fontSize="large" />
            <Typography variant="body2">Create Indents</Typography>
          </ButtonBase>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Grid item xs={2} sx={{ marginBlock: 3, display: 'flex', alignItems: 'center' }}>
          <ButtonBase focusRipple sx={{ width: '100%', flexDirection: 'column' }}>
            <AddVehicleIcon fontSize="large" />
            <Typography variant="body2">Add Vehicle</Typography>
          </ButtonBase>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Grid item xs={2} sx={{ marginBlock: 3, display: 'flex', alignItems: 'center' }}>
          <ButtonBase focusRipple sx={{ width: '100%', flexDirection: 'column' }}>
            <RvHookupOutlinedIcon fontSize="large" />
            <Typography variant="body2">Add Trailer</Typography>
          </ButtonBase>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Grid item xs={2} sx={{ marginBlock: 3, display: 'flex', alignItems: 'center' }}>
          <ButtonBase focusRipple sx={{ width: '100%', flexDirection: 'column' }}>
            <AddDriverIcon fontSize="large" />
            <Typography variant="body2">Add Driver</Typography>
          </ButtonBase>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Grid item xs={2} sx={{ marginBlock: 3, display: 'flex', alignItems: 'center' }}>
          <ButtonBase focusRipple sx={{ width: '100%', flexDirection: 'column' }}>
            <AddIndentsIcon fontSize="large" />
            <Typography variant="body2">Add Indents</Typography>
          </ButtonBase>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuickActions;
