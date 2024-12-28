import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import React from 'react'

const font = Poppins({
    subsets: ['latin'],
    weight: ["600"],
})

interface headerProps{
    label: string
}

const Header = ({ label }: headerProps) => {
  return (
      <div className='w-full flex flex-col gap-1 items-center justify-center '>
          <h1 className={cn("text-4xl font-serif ", font.className)}>
              Auth
          </h1>
          <p>{label}</p>
    </div>
  )
}

export default Header