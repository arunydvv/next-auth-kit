import React from 'react'
import CardWrapper from './CardWrapper'
import LoginButton from './LoginButton'

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an Account?"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm!
        </CardWrapper>
    )
}

export default LoginForm

