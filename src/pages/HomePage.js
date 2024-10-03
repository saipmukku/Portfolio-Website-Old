import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import '../App.css';

function HomePage() {
    return (
      <Box className="home-page">
        <Box className="personal-info">
          <Avatar alt="Neeth's picture" src="portrait.jpeg" className="avatar" sx={{ height: 400, width: 400 }} variant="rounded"/>
          <Box>
            <h1 id="box-header">
              Hi, my name is <span className="name">Saipraneeth Mukku</span>
            </h1>
            <h3 id="box-body">
              but they call me <span className="name">Neeth</span>
            </h3>
          </Box>
        </Box>
        <Box className="about-me">
          <span id="about-me-id"><h1>About me</h1></span>
          <Typography variant="h4">I am currently a senior at the University of Maryland, College Park, studying Computer Science with a minor in General Business.
            I have experience building software for various companies, and am always looking for ways to expand my skillset. Click through the tabs
            to view my resume, experience, and contact me with inquiries!
          </Typography>
        </Box>
      </Box>
    )
  }

export default HomePage;