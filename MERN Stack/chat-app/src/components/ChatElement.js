import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";
import StyledBadge from "./StyleBadge";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";


const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme();
    const dispatch =  useDispatch();
    return (
      <Box sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
      }}
        p={2}
        onClick={()=>{
          dispatch(SelectConversation({room_id: id}))
        }}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
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
              <Typography variant='subtitle 2'>{name}</Typography>
              <Typography variant='caption' >{msg}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems={'center'}>
            <Typography sx={{ fontWeight: 600 }} variant='caption' >{time}</Typography>
            <Badge color='primary' badgeContent={2}></Badge>
          </Stack>
        </Stack>
      </Box>
    )
  }

  export default ChatElement;