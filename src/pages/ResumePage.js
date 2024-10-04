import React, { useState } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
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
        <motion.div animate={{ opacity: [0, 1]}} transition={{
            type: "spring",
            tiffness: 260,
            damping: 20
        }}>
            <Box className="outer-resume">
                <Box className="icon-resume">
                    <IconButton onClick={handleOpen}>
                        <motion.div className="animated-icon" whileHover={{ scale: 1.75 }} whileTap={{ scale: 1.35, borderRadius: "100%" }}>
                            <HiOutlineDocumentSearch size={64} />
                        </motion.div>
                    </IconButton>
                </Box>
                <Box className="image-resume">
                    <Modal open={open} onClick={handleOpen} sx={{ display:'flex', alignItems:"center", justifyContent:'center' }}>
                        <Box component="img" src="resume.jpeg" alt="Resume" sx={{ height:'100vh', overflowY:'auto', position:'absolute', objectFit:'contain' }}/>
                    </Modal>
                    <Box component="img" src="resume.jpeg" className="actual-resume" alt="Resume"/>
                </Box>
            </Box>
        </motion.div>
    )
}

export default ResumePage;