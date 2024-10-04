import React from 'react';
import { Box } from '@mui/material';
import { motion } from "framer-motion";
import '../App.css'

function ContactPage() {
    return (
      <motion.div animate={{ opacity: [0, 1]}} transition={{
        type: "spring",
        tiffness: 260,
        damping: 20
      }}>
        <Box>
          Contact information will be listed here.
        </Box>
      </motion.div>
    )
}

export default ContactPage;