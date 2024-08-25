import React from 'react'
import { Avatar, Box, Divider, Fade, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import AntSwitch from '../../components/AntSwitch';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
const SideBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getPath = (index) => {
        switch (index) {
            case 0:
                return "/app"
            case 1:
                return "/group";
            case 2:
                return "/call";
            case 3:
                return "/settings";
            default:
                break;
        }
    }
    const getMenuPath = (index) => {
        switch (index) {
            case 0:
                return "/profile"
            case 1:
                return "/settings";
            case 2:
                // set isAuthenticated to false
                
                return "/auth/login";
            default:
                break;
        }
    }

    return (
        <Box
            sx={{
                width: 100,
                height: "100vh",
                bgcolor: theme.palette.background.neutral,
                boxShadow: "0 0 2px rgba(0,0,0,0.25)"
            }}

        >
            <Stack py={3} justifyContent="space-between" alignItems={"center"} sx={{ height: "100%" }}>

                <Stack alignItems={"center"} spacing={4}>
                    <Box
                        p={1}
                        sx={{
                            width: 64,
                            height: 64,
                            bgcolor: theme.palette.primary.main,
                            borderRadius: 1.5,
                        }}
                    >
                        <img src={Logo} alt={"chat app Logo"} />
                    </Box>
                    <Stack
                        sx={{ width: "max-content" }}
                        direction="column"
                        alignItems={"center"}
                        spacing={3}
                    >
                        {
                            Nav_Buttons.map((el) => (
                                el.index === selected ?
                                    <Box
                                        p={1}
                                        sx={{
                                            bgcolor: theme.palette.primary.main,
                                            borderRadius: 1.5,
                                        }}
                                        key={el.id}

                                    ><IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>
                                            {el.icon}
                                        </IconButton>
                                    </Box>
                                    : <IconButton
                                        sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary, padding: '16px' }}
                                        key={el.index}
                                        onClick={() => {
                                            setSelected(el.index)
                                            navigate(getPath(el.index));
                                        }}

                                    >
                                        {el.icon}
                                    </IconButton>
                            ))}
                        <Divider sx={{ width: "48px" }} />
                        {selected === 3 ?
                            <Box
                                p={1}
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    borderRadius: 1.5,
                                }}
                            >
                                <IconButton sx={{ width: "max-content", color: "#fff" }} onClick={() => navigate(getPath(3))}>
                                    <Gear />
                                </IconButton>
                            </Box>
                            : <IconButton
                                sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary, padding: "16px" }}
                                onClick={() => setSelected(3)}
                            >
                                <Gear />
                            </IconButton>
                        }
                    </Stack>
                </Stack >
                <Stack alignItems={"center"} spacing={4}>
                    <AntSwitch onChange={() => onToggleMode()} defaultChecked={theme.palette.mode === "dark"} />
                    {/* <Stack>
                        <Avatar
                            src={faker.image.avatar()}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} />
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                        >
                            <Stack spacing={1} px={1}>
                                {Profile_Menu.map((el, idx) => {
                                    return <MenuItem >
                                        <Stack onClick={()=>navigate(getMenuPath(idx))} sx={{ width: 100 }} direction="row" alignItems={"center"} justifyContent="space-between">
                                            <span>{el.title}</span>
                                            {el.icon}
                                        </Stack>{" "}
                                    </MenuItem>

                                })}
                            </Stack>
                        </Menu>

                    </Stack> */}
                    <ProfileMenu/>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar
