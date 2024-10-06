import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css';

function HomePage() {
    return (
      <Box className="home-page">
        <Box className="personal-info">
          <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <Avatar alt="Neeth's picture" src="portrait.jpeg" className="avatar" sx={{ height: 420, width: 420 }} variant="circle"/>
          </motion.div>
          <Box>
            <h1 id="box-header">
              <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
                Hi, my name is <span className="name">Saipraneeth Mukku</span>
              </motion.div>
            </h1>
            <h3 id="box-body">
              <motion.div className="animated-icon" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
                but they call me <span className="name">Neeth</span>
              </motion.div>
            </h3>
          </Box>
        </Box>
        <Box className="about-me">
          <span id="about-me-id">
            <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
              <h1>About me</h1>
            </motion.div>
          </span>
          <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <Typography variant="h5">I am currently a senior at the University of Maryland, College Park, studying Computer Science with a minor in General Business.
              I have experience building software for various companies, and am always looking for ways to expand my skillset. Click through the tabs
              to view my resume, experience, and contact me with inquiries!
            </Typography>
          </motion.div>
        </Box>
      </Box>
    )
  }

export default HomePage;