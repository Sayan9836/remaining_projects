import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToggleSidebar, updateSideBarType } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';

const BlockDialog = ({ handleClose, open }) => {
    return <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
        </DialogActions>
    </Dialog>
}

const DeleteDialog = ({ handleClose, open }) => {
    return <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
        </DialogActions>
    </Dialog>
}


const Contact = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [openBlock, setOpenBlock] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


    const handleCloseBlock = () => {
        setOpenBlock(false);
    };
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box
                    sx={{
                        boxShadow: "0 0 2px rgba(0,0,0,0.25)",
                        width: "100%",
                        bgcolor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                    }}
                >
                    <Stack direction="row" sx={{ height: "100%", p: 2 }} alignItems="center" justifyContent="center" spacing={2}>
                        <Typography variant='subtitle2'>Contact Info</Typography>
                        <IconButton onClick={() => { dispatch(ToggleSidebar()) }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>
                {/*       body       */}
                <Stack sx={{ height: "100%", position: 'relative', flexGrow: 1, overflow: 'scroll' }} p={3} spacing={3}>
                    <Stack alignItems={"center"} direction="row" spacing={2}>
                        <Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5}>
                            <Typography variant='article' fontWeight={600}>{faker.name.fullName()}</Typography>
                            <Typography variant='body2' fontWeight={500}>{"+91 7596889179"}</Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems={"center"} direction="row" justifyContent="space-evenly">
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant='overline'>Voice</Typography>
                        </Stack>
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant='overline'>Video</Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Stack spacing={0.5} >
                        <Typography variant='article' fontWeight={600}>About</Typography>
                        <Typography variant='body2' fontWeight={500}>Hii There I am Online</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={1}>
                        <Typography variant='subtitle2'>Media, Links & Docs</Typography>
                        <Button onClick={() => dispatch(updateSideBarType("SHARED"))} endIcon={<CaretRight />}>
                            401
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        {
                            [1, 2, 3].map(() => (
                                <Box>
                                    <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                                </Box>
                            ))
                        }
                    </Stack>
                    <Divider />
                    <Stack direction="row" alignItems="center" justifyContent={"space-between"}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Star />
                            <Typography variant='subtitle2'>Starred Message</Typography>
                        </Stack>
                        <IconButton onClick={() => dispatch(updateSideBarType("STARRED"))}>
                            <CaretRight />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Stack direction="row" alignItems="center" justifyContent={"space-between"}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Bell />
                            <Typography variant='subtitle2'>Mute Notification</Typography>
                        </Stack>
                        <AntSwitch />
                    </Stack>
                    <Divider />
                    <Typography>1 group in common</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        <Stack spacing={0.5}>
                            <Typography variant='subtitle2'>Coding Monk</Typography>
                            <Typography variant='caption'>Owl,parrot,rabbit,you</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button onClick={() => setOpenBlock(true)} startIcon={<Prohibit />} fullWidth variant='outlined'>
                            Block
                        </Button>
                        <Button onClick={() => setOpenDelete(true)} startIcon={<Trash />} fullWidth>
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            {openBlock && (
                <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
            )}
            {openDelete && (
                <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
            )}
        </Box>
    )
}

export default Contact
