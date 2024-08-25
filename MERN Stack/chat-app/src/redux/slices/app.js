import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import axios from "../../utils/axios";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",
    },
    snackbar: {
        open: null,
        message: null,
        severity: null,
    },
    users: [],
    friends: [],
    friendRequest: [],
    chat_type: null,
    room_id:null,
}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSideBarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
        openSnackbar(state, action) {
            state.snackbar.open = true;
            state.snackbar.severity = action.payload.severity;
            state.snackbar.message = action.payload.message;
        },
        closeSnackbar(state, action) {
            state.snackbar.open = false;
            state.snackbar.message = null;
        },
        updateUsers(state, action) {
            state.users = action.payload.users;
        },
        updateFriends(state, action) {
            state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
            state.friendRequest = action.payload.request;
        },
        selectConversation(state,action){
            state.chat_type= "indivitual"
            state.room_id = action.payload.room_id;
        }
    }
});

export default slice.reducer;

export function ToggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSidebar())
    }
}

export function updateSideBarType(type) {
    return async () => {
        dispatch(slice.actions.updateSideBarType({ type }));
    }
}

export const closeSnackBar = () => async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackbar());
};

export function showSnackbar({ severity, message }) {
    return async () => {
        dispatch(slice.actions.openSnackbar({
            message,
            severity,
        }));

        setTimeout(() => {
            dispatch(slice.actions.closeSnackbar())
        }, 4000);

    }
}

export const FetchUserProfile = () => {
    return async (dispatch, getState) => {
        await axios.get("/users/get-users", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateUsers({ users: res.data.data }))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const FetchFriends = () => {
    return async (dispatch, getState) => {
        await axios.get("/users/get-friends", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateFriends({ friends: res.data.data }))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const FetchFriendRequest = () => {
    return async (dispatch, getState) => {
        await axios.get("/users/get-requests", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`
            }
        }).then((res) => {
            console.log(res);
            dispatch(slice.actions.updateFriendRequests({ request: res.data.data }))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const SelectConversation = ({room_id}) => {
  return (dispatch,getState) => {
    dispatch(slice.actions.selectConversation({room_id}));
  }
}





