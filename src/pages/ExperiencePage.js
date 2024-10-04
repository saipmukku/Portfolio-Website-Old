import React from 'react';
import { Box, Card, Divider, Stack, Chip, Typography } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css';

function ExperiencePage() {
  return (
    <motion.div animate={{ opacity: [0, 1]}} transition={{
      type: "spring",
      tiffness: 260,
      damping: 20
    }}>
      <Box className="outer-exp" sx={{ p: 3 }}>
        <Box className="horizontal-exp">
          <Box id="dennys-exp">
            {JobFunction("Denny's", "Laurel, MD", "Service Assistant")}
          </Box>
          <Box id="stl-exp"></Box>
          <Box id="uhg-exp">
            {JobFunction("UnitedHealth Group", "Phoenix, AZ", "Software Engineer Intern")}
          </Box>
          <Box id="ftl-exp"></Box>
        </Box>
        <Box>
          <Box id="bl-exp"></Box>
          <Box id="arl-exp">
            {JobFunction("Army Research Laboratory", "Baltimore, MD", "Research Intern")}
          </Box>
          <Box id="tbl-exp"></Box>
          <Box id="aws-exp">
            {JobFunction("Amazon Web Services", "Arlington, VA", "Software Development Engineer Intern")}
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

function JobFunction(title, location, jobTitle) {
  return (
    <Card variant="outlined" sx={{ maxWidth:"25vw", backgroundColor:"#2D93AD" }} square={false}>
      <motion.div className="animated-icon" whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.05 }}>
        <Box sx={{ p:2 }}>
          <Stack direction="row" sx={{ justifyContent:"space-between", alignItems:"center" }}>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography gutterBottom variant="h7">
              {location}
            </Typography>
          </Stack>
          <Typography variant="h7" sx={{ textAlign:"center" }}>
            {jobTitle}
          </Typography>
        </Box>
        <Divider variant="middle"/>
        <Box sx={{ p:2 }}>
          <Typography gutterBottom variant="h8">
            Skills
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="TypeScript" size="medium"/>
            <Chip color="primary" label="Java" size="medium"/>
            <Chip color="primary" label="AWS" size="medium"/>
            <Chip color="primary" label="Kotlin" size="medium"/>
          </Stack>
        </Box>
      </motion.div>
    </Card>
  );
}

export default ExperiencePage;