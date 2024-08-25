import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import RHFTextField from '../../components/hook-form/RHFTextField';
import FormProvider from '../../components/hook-form/FormProvider';
import RHFAutoComplete from '../../components/hook-form/RHFAutoComplete';


const MEMBERS = ["name 1", "name 2", "name 3"];
const CreateGroupForm = ({handleClose}) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "Must have at leat 2 members")
    })

    const defaultValues = {
        title: "",
        members: []
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues,
    })
    const {
        reset,
        watch,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async () => {
        try {
            //API CALL
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        < FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={3}>
                <RHFTextField name="title" label="Title" />
                <RHFAutoComplete
                    name="members"
                    label="Members"
                    multiple
                    freeSolo
                    options={MEMBERS.map((option) => option)}
                    ChipProps={{ size: "medium" }}
                />
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type='submit' variant='contained'>
                        Create
                    </Button>
                </Stack>
            </Stack>
        </ FormProvider>
    )
};



const CreateGroup = ({ open, handleClose }) => {


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
                    {"Create New Group"}
                </DialogTitle>
                <DialogContent sx={{ mt: 4 }}>
                    <CreateGroupForm handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateGroup
