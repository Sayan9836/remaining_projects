import { Dialog, DialogContent, Stack, Tab, Tabs } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchFriendRequest, FetchFriends, FetchUserProfile } from '../../redux/slices/app'
import { FriendComponent, FriendRequestComponent, UserComponent } from '../../components/Friends'


const UserList = () => {
    const dispatch = useDispatch(0)
    const { users } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(FetchUserProfile());
    }, [])


    return (
        <>
            {users?.map((el, idx) => {
                return <UserComponent key={el.id} {...el} />
            })}
        </>

    )
}



const FriendRequestList = () => {
    const dispatch = useDispatch(0)
    const { friendRequest } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(FetchFriendRequest());
    }, [])


    return (
        <>
            {friendRequest?.map((el, idx) => {
                return <FriendRequestComponent key={el.id} {...el.sender} id={el._id}/>
            })}
        </>

    )
}

const FriendsList = () => {
    const dispatch = useDispatch();
    const { friends } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(FetchFriends());
    }, [])


    return (
        <>
            {friends?.map((el, idx) => {
                return <FriendComponent  key={el.id} {...el} />
            })}
        </>

    )
}
const Friends = ({ open, handleClose }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            keepMounted
            onClose={handleClose}
        >
            <Stack p={2} sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Explore" />
                    <Tab label="Friends" />
                    <Tab label="Requests" />
                </Tabs>
            </Stack>
            {/** Dialog content */}
            <DialogContent>
                <Stack spacing={2.5}>
                    {
                        () => {
                            switch (value) {
                                case 0:
                                  return <UserList/>
                                case 1:
                                    return <FriendsList/>
                                case 2:
                                    <FriendRequestList/>
                            }
                        }
                    }
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default Friends
