//import React from 'react';
import { Box, Paper, TextField, Typography, Button } from "@mui/material";

const Item = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="textSecondary" align="center">
                Create Items
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Paper elevation={20} sx={{ p: 5, width: '100%', maxWidth: 400 }}>
                    <form noValidate autoComplete="off">
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField label="Item 1" variant="filled" fullWidth />
                            <TextField label="Item 2" variant="filled" fullWidth />
                            <TextField label="Item 3" variant="filled" fullWidth />
                            <TextField label="Item 4" variant="filled" fullWidth />
                            <TextField label="Item 5" variant="filled" fullWidth />
                            <Button variant="contained" fullWidth>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
};

export default Item;
