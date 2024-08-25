import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';
import { useState } from 'react';
import CreateGroup from '../../sections/main/CreateGroup';

const Group = () => {
    const [openDialog,setOpenDialog]=useState(false);
   const handleClose =()=>{
    setOpenDialog(false);
   }
    const theme = useTheme();
    return (
        <Stack>
            <Box sx={{
                height: '100vh',
                backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                width: 320,
                boxShadow: "0 0 2px rgba(0,0,0,0.25)"
            }}>
                <Stack p={3} spacing={2} sx={{maxHeight:'100vh' }}>
                    <Stack sx={{ width: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='Search....' inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack >
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant='subtitle2' component={Link}>
                            Create new Group
                        </Typography>
                        <IconButton onClick={()=>setOpenDialog(true)}>
                            <Plus style={{ color: theme.palette.primary.main }} />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Stack spacing={3} sx={{ flexGrow: 1, height: '100%', }}>
                        <SimpleBarStyle style={{ height: '78vh' }}>
                            <Stack spacing={2.4} mb={2}>
                                <Typography variant='subtitle2' sx={{ color: "#676767" }} >pinned</Typography>
                                {ChatList.filter((el) => el.pinned).map((el) => {
                                    return <ChatElement {...el} />
                                })}
                            </Stack>
                            <Stack spacing={2.4}>
                                <Typography variant='subtitle2' sx={{ color: "#676767" }} >All Groups</Typography>
                                {ChatList.filter((el) => !el.pinned).map((el) => {
                                    return <ChatElement {...el} />
                                })}
                            </Stack>
                        </SimpleBarStyle>
                    </Stack>
                </Stack>
            </Box>
            {/* <Box sx={{

            }}>

            </Box> */}
            {openDialog && <CreateGroup open={setOpenDialog} handleClose={handleClose}/>}
        </Stack>
    )
}

export default Group
