import React, { useState } from 'react';
import { Box, Avatar, Tooltip, Fade, Link } from '@mui/material';
import { motion } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import '../App.css'

function ContactPage() {
  const [emailTooltip, setEmailTooltip] = useState("Copy");

  const copyAndUpdateTooltip = () => {
    navigator.clipboard.writeText("saipmukku@gmail.com");
    setEmailTooltip("Copied!");
    setTimeout(() => {
      setEmailTooltip("Copy");
    }, 1000);
  }

  return (
    <Box className="outer-contact">
      <Box>
        <Tooltip title="Leo" placement="top" arrow TransitionComponent={Fade}
          slotProps={{ popper: { modifiers: { name: "offset", options: { offset: [0, -90]} } } }}>
          <motion.div className="animated-avatar" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <Avatar alt="Neeth's picture" src="leo.png" sx={{ height: 420, width: 420 }} variant="circle"/>
          </motion.div>
        </Tooltip>
        <Box className="contact-info">
          <Box className="socials">
            <Tooltip title={emailTooltip} placement="top" arrow TransitionComponent={Fade}
              slotProps={{ popper: { modifiers: { name: "offset", options: { offset: [0, -5]} } } }}>
              <motion.div className="animated-icon" whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.35 }}>
                <EmailIcon sx={{ width: "64px", height: "64px" }} onClick={copyAndUpdateTooltip}/>
              </motion.div>
            </Tooltip>
          </Box>
          <Box className="socials">
            <Link href="https://www.linkedin.com/in/saipmukku" target="_blank" rel="noopener noreferrer">
              <Tooltip title="LinkedIn" placement="top" arrow TransitionComponent={Fade}>
                <motion.div className="animated-icon" whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.35 }}>
                  <Box component="img" src="linkedin-logo.png" sx={{ width: "64px", height: "64px" }} />
                </motion.div>
              </Tooltip>
            </Link>
          </Box>
          <Box className="socials">
            <Link href="https://www.github.com/saipmukku" target="_blank" rel="noopener noreferrer">
              <Tooltip title="GitHub" placement="top" arrow TransitionComponent={Fade}>
                <motion.div className="animated-icon" whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.35 }}>
                  <Box component="img" src="github-logo.png" sx={{ width: "64px", height: "64px" }}/>
                </motion.div>
              </Tooltip>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactPage;