import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const AlertContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  backgroundColor: 'white',
  borderRadius: '16px',
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(1),
    width: '420px',
  // marginLeft:'100px',
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e0e0e0',
  borderRadius: '10%',
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

const IconContainer = styled(Box)({
  marginRight: '8px',
});

const TitleContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(1),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(2),
}));

const AlertCard = ({ title, subtitle, description, date }) => (
  <AlertContainer>
    <HeaderContainer>
      <IconContainer>
        <IconBox>
          <NotificationsIcon />
        </IconBox>
      </IconContainer>
      <TitleContainer>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="caption" style={{ color: '#616161' }}>
          {subtitle}
        </Typography>
      </TitleContainer>
      <Typography variant="caption" style={{ color: '#616161' }}>
        {date}
      </Typography>
    </HeaderContainer>
    <Typography variant="body2">
      {description}
    </Typography>
    <ButtonContainer>
      <Button variant="text" color="primary"> 
       <u>Ignore</u> 
      </Button>
      <Button variant="contained" color="primary" style={{ backgroundColor: '#1a3875' }}>
        Resolve
      </Button>
    </ButtonContainer>
  </AlertContainer>
);

export default AlertCard;
