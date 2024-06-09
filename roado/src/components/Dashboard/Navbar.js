// Navbar.js
import React from 'react';
import { Paper, List, ListItem, ListItemIcon, IconButton } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {
    return (
        <Paper sx={{ width: '75px', borderRight: '1px solid #e0e0e0', height: 'auto', overflow: 'auto' }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <DashboardOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <AddToQueueOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <LabelImportantOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <AssignmentOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <LocalShippingOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <BusinessCenterOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <AccountBalanceWalletOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <DynamicFeedOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Paper>
    );
};

export default Navbar;
