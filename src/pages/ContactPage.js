import React from 'react';
import { Box, Avatar, Card, Typography } from '@mui/material';
import { motion } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import '../App.css'

function ContactPage() {
    return (
      <Box className="main-contact">
        <Box>
          <motion.div className="animated-avatar" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <Avatar alt="Neeth's picture" src="portrait.jpeg" sx={{ height: 420, width: 420 }} variant="circle"/>
          </motion.div>
          <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
            <Card >
              <Box className="contact-info">
                <EmailIcon />
                <Typography sx={{ fontFamily: 'Roboto' }}>saipmukku@gmail.com</Typography>
              </Box>
            </Card>
          </motion.div>
        </Box>
      </Box>
    )
}

export default ContactPage;