import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";
const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to TeeraFlow</Typography>
        <LoginForm />
        <Stack direction={"row"} spacing={0.5} justifyContent="flex-end">
          <Typography variant="body2">New User</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create a account
          </Link>
        </Stack>
      </Stack>

      <AuthSocial />
    </>
  );
};

export default Login;
