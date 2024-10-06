import React, { useState } from 'react';
import { Box, Card, Divider, Stack, Chip, Typography, Modal } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css';

function ExperiencePage() {
  const[open, setOpen] = useState(0);

  const handleOpen = (value) => {
    if(open === value) setOpen(0);
    else setOpen(value);
  }

  return (
    <Box className="outer-exp">
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(1)}>
          {JobCardFunction("Amazon Web Services", "Arlington, VA", "Software Development Engineer Intern", "June 2024 - August 2024",
            ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "Kotlin", "AWS CLI"], false)}
        </Box>
        <Modal className="card-desc" open={open === 1} onClick={() => handleOpen(open)}>
          <Box>
            {JobCardFunction("Amazon Web Services", "Arlington, VA", "Software Development Engineer Intern", "June 2024 - August 2024",
              ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "Kotlin", "AWS CLI"], true)}
          </Box>
        </Modal>
      </Box>
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(2)}>
          {JobCardFunction("UnitedHealth Group", "Phoenix, AZ", "Software Engineer Intern", "June 2023 - August 2023",
            ["Vite", "React", "Python", "Django", "PostreSQL", "Kubernetes"], false)}
        </Box>
        <Modal className="card-desc" open={open === 2} onClick={() => handleOpen(open)}>
          <Box>
            {JobCardFunction("UnitedHealth Group", "Phoenix, AZ", "Software Engineer Intern", "June 2023 - August 2023",
              ["Vite", "React", "Python", "Django", "PostreSQL", "Kubernetes"], true)}
          </Box>
        </Modal>
      </Box>
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(3)}>
          {JobCardFunction("Army Research Laboratory", "Baltimore, MD", "Research Intern", "June 2022 - August 2022",
            ["Python", "Raspberry Pi", "Research"], false)}
        </Box>
        <Modal className="card-desc" open={open === 3} onClick={() => handleOpen(open)}>
          <Box>
            {JobCardFunction("Army Research Laboratory", "Baltimore, MD", "Research Intern", "June 2022 - August 2022",
              ["Python", "Raspberry Pi", "Research"], true)}
          </Box>
        </Modal>
      </Box>
      <Box className="exp">
        <Box className="card-exp" onClick={() => handleOpen(4)}>
          {JobCardFunction("Denny's", "Laurel, MD", "Service Assistant", "June 2021 - August 2021", ["Teamwork"], false)}
        </Box>
        <Modal className="card-desc" open={open === 4} onClick={() => handleOpen(open)}>
          <Box>
            {JobCardFunction("Denny's", "Laurel, MD", "Service Assistant", "June 2021 - August 2021", ["Teamwork"], true)}
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}

function JobCardFunction(title, location, jobTitle, duration, skills, modal) {
  const skillChips = skills.map((skill, index) => (
    <Chip key={index} color="primary" label={skill} size="large" />
  ));

  return (
    <Card variant="outlined" sx={{ width: 700,
      margin: '20px auto',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)',
      }, backgroundColor:"#89BBFE" }} square={false}>
      <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
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
      </motion.div>
    </Card>
  );
}

export default ExperiencePage;