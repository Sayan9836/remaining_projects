import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Stack } from '@mui/system';
import { Alert, Button, IconButton, InputAdornment } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import FormProvider from '../../components/hook-form/FormProvider';
import { Eye, EyeSlash } from 'phosphor-react'; 
const NewPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const NewPasswordSchema = Yup.object().shape({
        newPassword: Yup.string().min(6, 'Password must be atleast 6 characters')
            .required("Password is required")
            .email("Email must be a valid email address"),
        confirmPassword: Yup.string().required("Password is required").oneOf([Yup.ref('newPassword'), null], 'Password must match'),
    });

    const defaultValues = {
        newPassword: "",
        confirmPassword: ""
    }

    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema),
        defaultValues,
    })
                     
    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods
                   
    const onSubmit = async () => {
        try {

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
                {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
                <RHFTextField name="newPassword" label="New Password" />
                <RHFTextField name="ConfirmPassword" label="Confirm Password" type={showPassword ? "text" : "password"} InputProps={{
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
                    Submit
                </Button>
            </Stack>

        </FormProvider>

    )
}

export default NewPasswordForm
