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
                <Box component="img" src="resume.jpeg" className="actual-resume" alt="Resume" sx={{ width:'36vw' }}/>
            </Box>
        </Box>
    )
}

export default ResumePage;