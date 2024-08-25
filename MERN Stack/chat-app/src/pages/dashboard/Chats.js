import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass, Users } from 'phosphor-react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import { ChatList } from '../../data'
import { SimpleBarStyle } from '../../components/Scrollbar'
import StyledBadge from '../../components/StyleBadge'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import ChatElement from '../../components/ChatElement'
import Friends from '../../sections/main/Friends'
import { useEffect } from 'react'
import { socket } from '../../socket'
import { useDispatch, useSelector } from 'react-redux'
import { FetchDirectConversation } from '../../redux/slices/conversation'


const user_id = window.localStorage.getItem("user_id");




const Chats = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { conversations } = useSelector((state) => state.conversation.direct_chat)
  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      console.log(data);
      dispatch(FetchDirectConversation({ conversations: data }));
    });
  }, []);

  const handleOpenDialog = () => {
    setOpenDialog(false);
  }
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          bgcolor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          boxShadow: '0 0 2px rgba(0,0,0,0.25)'
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography variant='h5'>Chats</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>

          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color='#709CE6' />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search....' inputProps={{ "aria-label": "search" }} />
            </Search>
          </Stack >
          <Stack spacing={1}>
            <Stack direction="row" alignItems={"center"} spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack sx={{ flexGrow: 1, height: '100%', }}>
            <SimpleBarStyle style={{ height: '70vh' }}>
              <Stack spacing={2.4} mb={2}>

              </Stack>
              <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{ color: "#676767" }} >All Chats</Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}
    </>
  )
}

export default Chats
