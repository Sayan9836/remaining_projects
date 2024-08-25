import React, { useCallback } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Stack } from '@mui/system';
import { Alert, Button, IconButton, InputAdornment, Link } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import FormProvider from '../../components/hook-form/FormProvider';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
const ProfileForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const ProfileSchema = Yup.object().shape({
        name: Yup.string()
            .required("name is required"),
        about: Yup.string().required("About is required"),
        avatar: Yup.string().required("Avatar is required")
    });

    const defaultValues = {
        name: "",
        about: "",
        avatar: ""
    }

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    })

    const {
        reset,
        watch,
        setError,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods

    const values = watch();

    const handleDrop = useCallback((recievedFiles) => {
        const file = recievedFiles[0];

        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })
        if (file) {
            setValue("avatarUrl", newFile, { shouldValidate: true })
        }

    }, [setValue])

    const onSubmit = async () => {
        try {
            console.log("data");
        } catch (error) {
            console.log(error);
            reset()
            setError("afterSubmit", {
                ...error,
                message: error.message,
            })
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={3}>
                <Stack spacing={3}>
                    {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
                    <RHFTextField name="name" label="Name" helperText={"This name is visible to your Contact"} />
                    <RHFTextField multiline rows={3} maxRows={5} name="about" label="About" />
                </Stack>
                <Stack direction={"row"} justifyContent={"flex-end"}>
                    <Button  color='primary' size='large' type='submit' variant='outlined'>
                        Save
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    )
}

export default ProfileForm
