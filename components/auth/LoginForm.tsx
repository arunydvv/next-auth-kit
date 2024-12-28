import React from 'react'
import CardWrapper from './CardWrapper'
import LoginButton from './LoginButton'

const LoginForm = () => {
    return (
        <CardWrapper
            children={<LoginButton mode='modal'>Login with Google</LoginButton>}
            headerLabel="Login"
            backButtonLabel="Back"
            backButtonHref="/"
            showSocial={true}
        />
    )
}

export default LoginForm
