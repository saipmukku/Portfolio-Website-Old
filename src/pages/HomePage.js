import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css';

function HomePage() {
  return (
    <Box className="outer-home">
      <Box className="personal-info">
        <motion.Box whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }} className="avatar">
          <Avatar alt="Neeth's picture" src="documents/portrait.jpeg" sx={{ height: "30rem", width: "30rem" }} variant="circle"/>
        </motion.Box>
        <Box>
          <h1 style={{ display: "flex", justifyContent: "center", 
            textAlign:"center", fontSize:"5rem" }}>
            <motion.Box whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
              Hi, my name is <span style={{ color:"#2980b9" }}>Saipraneeth Mukku</span>
            </motion.Box>
          </h1>
          <h3 style={{ textAlign:"center", fontSize:"3rem" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
              but they call me <span style={{ color:"#2980b9" }}>Neeth</span>
            </motion.div>
          </h3>
        </Box>
      </Box>
      <Box className="about-me">
        <span style={{ fontSize:"4vh" }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <h1>About me</h1>
          </motion.div>
        </span>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
          <Typography sx={{ fontSize:"2.5vh" }}>I am currently a senior at the University of Maryland, College Park, studying Computer Science with a minor in General Business.
            I have experience building software for various companies, and am always looking for ways to expand my skillset. Click through the tabs
            to view my resume, experience, and contact me with inquiries!
          </Typography>
        </motion.div>
      </Box>
    </Box>
  )
}

export default HomePage;