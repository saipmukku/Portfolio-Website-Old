import React, { useState } from 'react';
import { Avatar, Tabs, Tab, Box, styled, TextareaAutosize, Paper } from '@mui/material';
import './App.css';

function MainPage() {
  const [value, setValue] = useState(0);
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(23, 3, 18, 1)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#41658A',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#41658A',
      fontWeight: theme.typography.fontWeightLight,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#41658A',
    },
  }));

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  }

  return (
    <Box className="main-page" sx={{ width: '100%' }}>
      <Tabs className="nav-tabs" value={value} onChange={handleChange} centered>
        <StyledTab label="Home"/>
        <StyledTab label="Résumé"/>
        <StyledTab label="Experience"/>
        <StyledTab label="Contact"/>
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <HomePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ResumePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ExperiencePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ContactPage />
      </CustomTabPanel>
    </Box>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function HomePage() {
  return (
    <Box>
      <Box className="personal-info">
        <Avatar alt="Neeth's picture" src="portrait.jpeg" sx={{ width: 240, height: 240 }} variant="rounded"/>
        <br></br>
        <Paper className="personal-info-paper" elevation={1}>
          HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
        </Paper>
      </Box>
    </Box>
  )
}

function ResumePage() {
  return (
    <Box>
      Resume Page
    </Box>
  )
}

function ExperiencePage() {
  return (
    <Box>
      Experience Page
    </Box>
  )
}

function ContactPage() {
  return (
    <Box>
      Contact Page
    </Box>
  )
}

function App() {
  return (
    <Box className="root">
      <MainPage />
    </Box>
  );
}

export default App;
