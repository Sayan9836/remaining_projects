import { Dialog, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";
const StartCall = ({ open, handleClose }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                aria-describedby="alert-dialog-slide-description"
                sx={{ p: 4 }}

            >
                <DialogTitle>
                    {"Start New Conversation"}
                </DialogTitle>
                <DialogContent sx={{ mt: 4 }} spacing={1}>
                    <Stack p={1} sx={{ width: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='Search....' inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack>
                    <Stack sx={{ height: '100%' }}>
                        <Stack spacing={2.4}>
                            {MembersList?.map((el) => <CallElement {...el} />)}
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog >
        </>
    )
}

export default StartCall