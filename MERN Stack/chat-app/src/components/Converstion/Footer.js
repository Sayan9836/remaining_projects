import React, { useState } from 'react'
import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from 'phosphor-react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import {socket} from '../../socket'

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
    }
}))

const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact",
    },
];

const ChatInput = ({ setOpenPicker, setValue,value,inputRef, openActions, setOpenActions }) => {
    return <StyledInput
      inputRef={inputRef}
      value={value}
      onChange={(event) => setValue(event.target.value)}
        fullWidth
        placeholder='Write a message....'
        variant="filled"
        InputProps={{
            disableUnderline: true,
            startAdornment:
                <>
                    <Stack sx={{ display: openActions ? "inline-block" : "none", position: "relative" }}>
                        {Actions.map((el) => (
                            <Tooltip placement='right' title={el.title}>
                                <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                                    {el.icon}
                                </Fab>
                            </Tooltip>
                        ))}
                    </Stack>
                    <InputAdornment>
                        <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                            <LinkSimple />
                        </IconButton>
                    </InputAdornment>
                </>,
            endAdornment: <InputAdornment>
                <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
                    <Smiley />
                </IconButton>
            </InputAdornment>
        }}
    />
}

function linkify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      (url) => `<a href="${url}" target="_blank">${url}</a>`
    );
  }

function containsUrl(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(text);
}

const Footer = () => {
    const [openPicker, setOpenPicker] = useState(false)
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const { current_conversation } = useSelector(
        (state) => state.conversation.direct_chat
    );

    const user_id = window.localStorage.getItem("user_id");

    // const isMobile = useResponsive("between", "md", "xs", "sm");

    const { sideBar, room_id } = useSelector((state) => state.app);

    const theme = useTheme();

    function handleEmojiClick(emoji) {
        const input = inputRef.current;

        if (input) {
            const selectionStart = input.selectionStart;
            const selectionEnd = input.selectionEnd;

            setValue(
                value.substring(0, selectionStart) +
                emoji +
                value.substring(selectionEnd)
            );

            // Move the cursor to the end of the inserted emoji
            input.selectionStart = input.selectionEnd = selectionStart + 1;
        }
    }

    return (
        <Box
            p={2}
            sx={{
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0 0 2px rgba(0,0,0,0.25)"
            }}>
            <Stack direction="row" alignItems={"center"} spacing={3}>
                <Stack sx={{ width: '100%' }}>
                    <Box sx={{ display: openPicker ? "inherit" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
                        <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
                    </Box>
                    <ChatInput inputRef={inputRef} value={value} setValue={value} openPicker={openPicker} setOpenPicker={setOpenPicker} />
                </Stack>
                <Box
                    sx={{
                        height: 48,
                        width: 48,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 1.5
                    }}
                >
                    <Stack alignItems={'center'} justifyContent={"center"} sx={{ height: '100%', width: '100%' }}>
                        <IconButton
                            onClick={() => {
                                socket.emit("text_message", {
                                    message:linkify(value),
                                    conversation_id: room_id,
                                    from: user_id,
                                    to: current_conversation.user_id,
                                    type: containsUrl(value) ? "Link" : "Text",
                                });  
                            }}
                        >
                            <PaperPlaneTilt color='#fff' />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer
