import React, { useState } from 'react';
import { Box, Button, ButtonBase, Modal } from '@mui/material';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { motion } from "framer-motion";
import '../App.css';

function ResumePage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if(open) setOpen(false);
        else setOpen(true);
    }

    return (
        <Box className="outer-resume">
            <Modal open={open} onClick={handleOpen} 
                    sx={{ display:'flex', alignItems:"center", justifyContent:'center' }}>
                <Box component="img" src="resume.jpeg" alt="Resume" 
                    sx={{ width:'100%', height:'100%', objectFit:'contain' }}/>
            </Modal>
            <Box className="image-resume">
                <motion.div className="animated-icon" whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
                    <Box component="img" src="resume.jpeg" className="actual-resume" alt="Resume" onClick={handleOpen}/>
                </motion.div>
            </Box>
        </Box>
    )
}

export default ResumePage;