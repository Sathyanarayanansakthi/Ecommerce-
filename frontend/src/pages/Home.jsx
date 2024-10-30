// import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box>
            <Typography variant="h6" align="center">Home Page</Typography>
            <Box textAlign="left">
                <Button variant="contained" component={Link} to="/items">Add Items</Button>
            </Box>
        </Box>
    );
}

export default Home;
