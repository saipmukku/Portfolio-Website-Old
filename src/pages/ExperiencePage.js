import React from 'react';
import { Box, Card, Divider, Stack, Chip, Typography, Grid } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css';

function ExperiencePage() {
  return (
    <Box className="outer-exp">
      <Grid container rowSpacing={32} columnSpacing={76}>
        <Grid id="dennys-exp" item xs={6}>
          {JobCardFunction("Denny's", "Laurel, MD", "Service Assistant", "June 2021 - August 2021", ["Teamwork"])}
        </Grid>
        <Grid id="uhg-exp" item xs={6}>
          {JobCardFunction("UnitedHealth Group", "Phoenix, AZ", "Software Engineer Intern", "June 2023 - August 2023",
            ["Vite", "React", "Python", "Django", "PostreSQL", "Kubernetes"])}
        </Grid>
        <Grid id="arl-exp" item xs={6}>
          {JobCardFunction("Army Research Laboratory", "Baltimore, MD", "Research Intern", "June 2022 - August 2022",
            ["Python", "Raspberry Pi", "Research"])}
        </Grid>
        <Grid id="aws-exp" item xs={6}>
          {JobCardFunction("Amazon Web Services", "Arlington, VA", "Software Development Engineer Intern", "June 2024 - August 2024",
            ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "Kotlin", "AWS CLI"])}
        </Grid>
      </Grid>
    </Box>
  )
}

function JobCardFunction(title, location, jobTitle, duration, skills) {
  const skillChips = skills.map((skill, index) => (
    <Chip key={index} color="primary" label={skill} size="medium" />
  ));
  
  return (
    <Card variant="outlined" sx={{ width:"30vw", backgroundColor:"#2D93AD" }} square={false}>
      <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
        <Box sx={{ p:2 }}>
          <Stack direction="row" sx={{ justifyContent:"space-between", alignItems:"center" }}>
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