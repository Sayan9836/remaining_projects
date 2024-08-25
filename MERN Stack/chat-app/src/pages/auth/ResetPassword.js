import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <>
      <Typography variant='h3' paragraph>Forgot Password?</Typography>
      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Please enter the email address associated with your account and We
        will email you a link to reset your password.
      </Typography>
      <ResetPasswordForm />
      <Link to="/auth/login" component={RouterLink} color="inherit" variant='subtitle2'
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: 'inline-flex'
        }}
      >
        <CaretLeft />
        Go back to Sign in
      </Link>
    </>
  )
}

export default ResetPassword
