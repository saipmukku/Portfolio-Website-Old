import React, { useState } from 'react';
import { Box, Card, Divider, Stack, Chip, Typography } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css';

function ExperiencePage() {
  const[open, setOpen] = useState(0);
  let aws = JobCardFunction("Amazon Web Services", "Arlington, VA", "Software Development Engineer Intern", "May 2024 - August 2024",
    ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "Kotlin", "AWS CLI"], false);
  let uhg = JobCardFunction("UnitedHealth Group", "Phoenix, AZ", "Software Engineer Intern", "June 2023 - August 2023",
    ["Vite", "React", "Python", "Django", "PostreSQL", "Kubernetes"], false);
  let arl = JobCardFunction("Army Research Laboratory", "Baltimore, MD", "Research Intern", "June 2022 - August 2022",
      ["Python", "Raspberry Pi", "Research"], false);
  let dennys = JobCardFunction("Denny's", "Laurel, MD", "Service Assistant", "June 2021 - August 2021", ["Teamwork"], false);
  

  const handleOpen = (value) => {
    if(open === value) setOpen(0);
    else setOpen(value);
  }

  return (
    <Box className="outer-exp">
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(1)}>
          {aws}
        </Box>
      </Box>
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(2)}>
          {uhg}
        </Box>
      </Box>
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(3)}>
          {arl}
        </Box>
      </Box>
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(4)}>
          {dennys}
        </Box>
      </Box>
    </Box>
  )
}

function JobCardFunction(title, location, jobTitle, duration, skills, modal) {
  const skillChips = skills.map((skill, index) => (
    <Chip key={index} color="primary" label={skill} size="large" />
  ));

  return (
    <Card variant="outlined" sx={{
      margin: '20px auto',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)',
      }, backgroundColor:"#3498db" }} square={false}>
      <motion.Box className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" sx={{ justifyContent:"space-between", gap:"5vw", alignItems:"center" }}>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography gutterBottom>
              {location}
            </Typography>
          </Stack>
          <Typography variant="h5" sx={{ textAlign:"center" }}>
            {jobTitle}
          </Typography>
          <Typography sx={{ textAlign:"center" }}>
              {duration}
          </Typography>
        </Box>
        <Divider variant="middle"/>
        <Box sx={{ p:2 }}>
          <Stack direction="row" sx={{ justifyContent:"space-between", alignItems:"center" }}>
            <Typography gutterBottom variant="h8" sx={{ fontWeight:"bolder" }}>
              Skills
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ flexWrap:"wrap", rowGap:1 }}>
            {skillChips}
          </Stack>
        </Box>
      </motion.Box>
    </Card>
  );
}

export default ExperiencePage;