import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Stack } from '@mui/system';
import { Alert, Button, IconButton, InputAdornment, Link, Typography } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import FormProvider from '../../components/hook-form/FormProvider';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../redux/slices/auth';

const RegisterForm = () => {
    const dispatch =useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("FirstName is required"),
        lastName: Yup.string().required("LastName is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "demo@gmail.com",
        password: "demo@1233"
    }

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    })

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors},
    } = methods

    const onSubmit = async (data) => {
        try {
           dispatch(RegisterUser(data))
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
            <Stack spacing={3} >
                {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField name="firstName" label="First Name" />
                    <RHFTextField name="lastName" label="Last Name" />
                </Stack>
                <RHFTextField name="email" label="Email address" />
                <RHFTextField name="password" label="password" type={showPassword ? "text" : "password"} InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
                <Button fullWidth color='inherit' size='large' type='submit' variant='contained' sx={{
                    bgcolor: 'text.primary', color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey-800", '&:hover': {
                        bgcolor: "text.primary",
                        color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey-800",
                    }
                }}>
                    Create Account
                </Button>
            </Stack>


        </FormProvider>
    )
}

export default RegisterForm
