import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
// import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCurrentMessages, SetCurrentConversation } from '../../redux/slices/conversation'
import { socket } from '../../socket'

const Message = ({ menu }) => {
    const dispatch = useDispatch();

    const { conversations, current_messages } = useSelector(
        (state) => state.conversation.direct_chat
    );
    const { room_id } = useSelector((state) => state.app);

    useEffect(() => {
        if (conversations  !== []) {
            const current = conversations.find((el) => el?.id === room_id);

            socket.emit("get_messages", { conversation_id: current?.id }, (data) => {
                // data => list of messages
                console.log(data, "List of messages");
                dispatch(FetchCurrentMessages({ messages: data }));
            });

            dispatch(SetCurrentConversation(current));
        }
    }, []);
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {current_messages.map((el) => {
                    switch (el.type) {
                        case "divider":
                            return <Timeline el={el} />

                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    return <MediaMsg el={el} menu={menu} />
                                case "doc":
                                    return <DocMsg el={el} menu={menu} />
                                case "link":
                                    return <LinkMsg el={el} menu={menu} />
                                case "reply":
                                    return <ReplyMsg el={el} menu={menu} />
                                default:
                                    return <TextMsg el={el} menu={menu} />
                            }
                    }
                })}
            </Stack>
        </Box>
    )
}

export default Message
