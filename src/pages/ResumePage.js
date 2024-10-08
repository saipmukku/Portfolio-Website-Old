import React, { useState } from 'react';
import { Box, Modal, Button } from '@mui/material';
import PageviewIcon from '@mui/icons-material/Pageview';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from "framer-motion";
import '../App.css';

function ResumePage() {
    const [open, setOpen] = useState(false);
    const [showNewPage, setShowNewPage] = useState(false);

    const handleOpen = () => { setOpen(!open) }
    const handleShowNewPage = () => { setShowNewPage(true) };
    const handleGoBack = () => { setShowNewPage(false) };

    return (
        <>
            {showNewPage ? (
                <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
                    <Button variant="contained" sx={{ position: 'fixed', zIndex: 2, bottom: 0,
                            backgroundColor: '#007FFF', color: 'white', margin: "2.5vh" }}
                        onClick={handleGoBack}>
                        <ArrowBackIcon />
                    </Button>
                    <iframe src="Resume.pdf" style={{ position: 'fixed', top: 0, left: 0, 
                        width: '100vw', height: '100vh', border: 'none', zIndex:1 }} title="Resume PDF" />
                </Box>
            ) : (
                <Box className="outer-resume">
                    <Modal open={open} onClick={handleOpen}
                            sx={{ display:'flex', alignItems:"center", justifyContent:'center' }}
                            closeAfterTransition
                            slotProps={{ backdrop: { timeout: 500 } }}>
                        <Box component="img" src="resume.jpeg" alt="Resume" 
                            sx={{ width:'100%', height:'100%', objectFit:'contain' }}/>
                    </Modal>
                    <Box className="image-resume">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.05 }}>
                            <Box component="img" src="resume.jpeg" className="actual-resume" alt="Resume" onClick={handleOpen}/>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 1.5 }}>
                            <PageviewIcon sx={{ height:"64px", width:"64px" }}
                                onClick={handleShowNewPage}/>
                        </motion.div>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default ResumePage;