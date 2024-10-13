import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import '../App.css';

function Main() {
    const [value, setValue] = useState(4);

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    }

    const renderContent = () => {
        switch(value) {
            case 0:
                return <HomePage />;
            case 1:
                return <ResumePage />;
            case 2:
                return <ExperiencePage />;
            case 3:
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    }

    return (
        <Box className="main-page" sx={{ width: '100%' }}>
            <Box className="nav-bar">
                <Typography variant="h5" className="swe">
                    Saipraneeth Mukku | Software Engineer
                </Typography>
                <Tabs onChange={handleChange} value={value} variant="standard" textColor="#2980b9" centered={true} className="tabs">
                    <Tab label="Home" value={0}/>
                    <Tab label="Resume" value={1}/>
                    <Tab label="Experience" value={2}/>
                    <Tab label="Contact" value={3}/>
                </Tabs>
            </Box>
            <Box>
                {renderContent()}
            </Box>
        </Box>
    );
}

export default Main;