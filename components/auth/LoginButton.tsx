"use client"
import React from 'react'

interface LoginButtonProps{
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean
}


const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {

    const onClick = () => { 
        console.log("Login Button Clicked")
    }
    


  return (
      <span
          onClick={onClick}
          className='cursor-pointer'>
          {children}
      </span>
  )
}

export default LoginButton