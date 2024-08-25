import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from "yup"
import { Button, Stack } from '@mui/material'
import FormProvider from '../../components/hook-form/FormProvider'
import RHFCodes from '../../components/hook-form/RHFCodes'
import { useDispatch } from 'react-redux'
import { VerifyEmail } from '../../redux/slices/auth'
const VerifyForm = () => {
    const dispatch=useDispatch();
    const VerifyCodeSchema =Yup.object({
        code1: Yup.string().required("Code is required"),
        code2: Yup.string().required("Code is required"),
        code3: Yup.string().required("Code is required"),
        code4: Yup.string().required("Code is required"),
        code5: Yup.string().required("Code is required"),
        code6: Yup.string().required("Code is required"),

    })

    const defaultValues = {
       code1: "",
       code2: "",
       code3: "",
       code4: "",
       code5: "",
       code6: "",
    }
    const methods =useForm({
        mode: "onChange",
        resolver : yupResolver(VerifyCodeSchema),
        defaultValues,
    })
    const {handleSubmit,formState} =methods;
    const onSubmit = async(data)=>{
        try {
            dispatch(VerifyEmail({
                otp:`${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`
            }))
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack>
            <RHFCodes keyName='codes' inputs={["code1","code2","code3","code4","code5","code6"]}/>
            <Button fullWidth color='inherit' size='large' type='submit' variant='contained' sx={{
                bgcolor: 'text.primary', color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey-800", '&:hover': {
                    bgcolor: "text.primary",
                    color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey-800",
                }
            }}>
                verify-OTP
            </Button>
        </Stack>
    </FormProvider>
    </>
  )
}

export default VerifyForm
