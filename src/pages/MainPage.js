import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Fade } from '@mui/material';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import '../App.css';

function MainPage() {
    const [value, setValue] = useState(0);

    const handleChange = (_event, newValue) => {
        setValue(newValue);
        console.log(newValue);
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
        <Fade in={true} timeout={2000}>
            <Box className="main-page" sx={{ width: '100%' }}>
                <Box className="nav-bar">
                    <Typography variant="h4" className="nav-bar-info" sx={{ fontWeight:'400', mt:'2vh' }}>Saipraneeth Mukku | Software Engineer</Typography>
                    <Tabs onChange={handleChange} value={value} variant="standard" sx={{ width:'1000' }} centered={true}>
                        <Tab label="Home" value={0}/>
                        <Tab label="Resume" value={1}/>
                        <Tab label="Experience" value={2}/>
                        <Tab label="Contact" value={3}/>
                    </Tabs>
                </Box>
                <Box className="all-page-content">
                    {renderContent()}
                </Box>
            </Box>
        </Fade>
    );
}

export default MainPage;