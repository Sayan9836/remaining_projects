import { Box, IconButton, useTheme,Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react';
import React from 'react'
import ProfileForm from '../../sections/settings/ProfileForm';

const Profile = () => {
    const theme = useTheme();
    return (
        <Stack>
            <Box sx={{
                height: '100vh',
                backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                width: 320,
                boxShadow: "0 0 2px rgba(0,0,0,0.25)"
            }}>
                <Stack p={4} spacing={4}>
                    <Stack direction={"row"} alignItems={"center"} spacing={3}>
                        <IconButton>
                            <CaretLeft size={24} color={"#4B4B4B"}/>
                        </IconButton>
                        <Typography variant='h5'>Profile</Typography>
                    </Stack>
                    <ProfileForm/>
                </Stack>
            </Box>
            
        </Stack>
    )
}

export default Profile
