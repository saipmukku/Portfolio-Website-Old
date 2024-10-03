import React from 'react';
import { Box, IconButton } from '@mui/material';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import '../App.css'

function ResumePage() {
    return (
        <Box className="outer-resume">
            <Box className="icon-resume">
                <IconButton>
                <HiOutlineDocumentSearch />
                </IconButton>
            </Box>
            <Box className="image-resume">
                <img src="resume.jpeg" className="actual-resume" width="430" alt="Resume"/>
            </Box>
        </Box>
    )
}

export default ResumePage;