import React from 'react'
import StyledBadge from '../StyleBadge'
import { faker } from '@faker-js/faker'
import {useTheme } from '@mui/material/styles';
import { Avatar,Box, Divider, IconButton,Stack, Typography, } from '@mui/material'
import { CaretDown,MagnifyingGlass,Phone,VideoCamera } from 'phosphor-react';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
const Header = () => {
    const theme=useTheme();
    const dispatch=useDispatch();
    return (
        <Box
            p={2}
            sx={{
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0 0 2px rgba(0,0,0,0.25)"
            }}>
            <Stack alignItems={"center"} direction="row" justifyContent={"space-between"} sx={{ width: "100%", height: "100%" }}>
                <Stack direction={"row"} spacing={2} onClick={()=>dispatch(ToggleSidebar())}>
                    <Box>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant='dot'
                        >
                            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        </StyledBadge>
                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>{faker.name.fullName()}</Typography>
                        <Typography variant='caption'>Online</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={3}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>

                </Stack>
            </Stack>
        </Box>
    )
}

export default Header
