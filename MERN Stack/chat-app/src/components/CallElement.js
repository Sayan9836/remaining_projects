import { faker } from '@faker-js/faker'
import { Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import StyledBadge from './StyleBadge'
import { ArrowBendDownLeft, ArrowDownLeft, ArrowDownRight, Phone, VideoCamera } from 'phosphor-react'

const CallLogElement = ({ online, incoming, missed }) => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: theme.palette.background.paper,
            }}
                p={2}
            >
                <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between"
                >
                    <Stack spacing={2} direction={"row"} alignItems={"center"}>
                        {online ?
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant='dot'
                            >
                                <Avatar src={faker.image.avatar()} />
                            </StyledBadge> : <Avatar src={faker.image.avatar()} />
                        }
                        <Stack spacing={0.3}>
                            <Typography variant='subtitle 2'>{faker.name.fullName()}</Typography>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                {incoming ?
                                    <ArrowDownLeft color={missed ? "red" : "green"} />
                                    :
                                    <ArrowDownRight color={missed ? "red" : "green"} />
                                }
                                <Typography variant='caption'>Yesterday 21.24</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <IconButton>
                        <Phone color='green' />
                    </IconButton>
                </Stack>
            </Box>
        </>
    )
}

const CallElement = ({ online, incoming, missed }) => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: theme.palette.background.paper,
            }}
                p={2}
            >
                <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between"
                >
                    <Stack spacing={2} direction={"row"} alignItems={"center"}>
                        {online ?
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant='dot'
                            >
                                <Avatar src={faker.image.avatar()} />
                            </StyledBadge> : <Avatar src={faker.image.avatar()} />
                        }
                        <Stack spacing={0.3}>
                            <Typography variant='subtitle 2'>{faker.name.fullName()}</Typography>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                {incoming ?
                                    <ArrowDownLeft color={missed ? "red" : "green"} />
                                    :
                                    <ArrowDownRight color={missed ? "red" : "green"} />
                                }
                                <Typography variant='caption'>Yesterday 21.24</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"}>
                        <IconButton>
                            <Phone color='green' />
                        </IconButton>
                        <IconButton>
                            <VideoCamera color='green' />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}


export { CallLogElement, CallElement };
