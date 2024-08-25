import { Avatar, Box, Button, Divider, Grid, IconButton, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ToggleSidebar, updateSideBarType } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';
import { useState } from 'react';
import { SHARED_DOCS, SHARED_LINKS } from '../data';
import { DocMsg, LinkMsg } from './Converstion/MsgTypes';

const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        <Typography variant='subtitle2'>Contack Info</Typography>
                        <IconButton onClick={() => { dispatch(updateSideBarType("CONTACT")) }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                <Stack sx={{ height: "100%", position: 'relative', flexGrow: 1, overflow: 'scroll' }} p={3} spacing={3}>
                    {(() => {
                        switch (value) {
                            case 0:
                                return <Grid container spacing={value === 1 ? 1 : 3}>
                                    {
                                        [0, 1, 2, 3, 4, 5, 6].map(() => {
                                            return <Grid item xs={4}>
                                                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            case 1:
                                return SHARED_LINKS.map((el) => <LinkMsg el={el} />)
                            case 2:
                                return SHARED_DOCS.map((el) => <DocMsg el={el} />)
                            default:
                                break;
                        }
                    })()}
                </Stack>

            </Stack>
        </Box>
    )
}

export default SharedMessages

