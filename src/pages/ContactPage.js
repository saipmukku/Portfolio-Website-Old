import React, { useState } from 'react';
import { Box, Avatar, Tooltip, Fade, Link, Modal, TextField, Button, Typography } from '@mui/material';
import { motion } from "framer-motion";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
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
      <Box className="message-contact">
        {/* <DeprecatedMessageFunction /> */}
      </Box>
      <Box>
        <Tooltip title="Leo" placement="top" arrow TransitionComponent={Fade}
          slotProps={{ popper: { modifiers: { name: "offset", options: { offset: [0, -75]} } } }}>
          <motion.div className="animated-avatar" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <Avatar alt="Neeth's picture" src="leo.png" sx={{ height: 420, width: 420 }} variant="circle"/>
          </motion.div>
        </Tooltip>
        <Box className="contact-info">
          <Box className="socials">
            <Tooltip title={emailTooltip} placement="top" arrow TransitionComponent={Fade}
              slotProps={{ popper: { modifiers: { name: "offset", options: { offset: [0, -5]} } } }}>
              <motion.div className="animated-icon" whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.35 }}>
                <EmailTwoToneIcon sx={{ width: "64px", height: "64px" }} onClick={copyAndUpdateTooltip}/>
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
      <Box className="message-contact">

      </Box>
    </Box>
  )
}

function DeprecatedMessageFunction() {
  const [messagePrompt, setMessagePrompt] = useState(false);

  const promptMessage = () => {
    setMessagePrompt(!messagePrompt);
  }

  return (
    <Box className="message-contact">
      <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 1.5 }}>
        <MessageTwoToneIcon sx={{ width: "64px", height: "64px" }} onClick={promptMessage} />
      </motion.div>
      <Modal className="message-modal" open={messagePrompt}>
        <Box className="modal-box">
          <Typography variant="h4" sx={{ textAlign: 'center' }}>Type a message below and click send to send me an inquiry.</Typography>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>Please include your email if you would like a reply.</Typography>
          <TextField className="message" variant="filled" color="#000000" label="Enter Message" multiline rows={8} fullWidth />
          <Box className="modal-buttons">
            <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 1.5 }}>
              <Button onClick={promptMessage}>
                Send
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 1.5 }}>
              <Button onClick={promptMessage}>
                Cancel
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default ContactPage;