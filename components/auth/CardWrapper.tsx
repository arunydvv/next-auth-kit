import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import header from './header'

interface CardWrapperProps{
    children: React.ReactElement,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
} : CardWrapperProps) => {
  return (
      <Card className='w-[400px] shadow-md'>
          <CardHeader>
              <header label = {headerLabel} />
          </CardHeader>
          <CardContent>
              
          </CardContent>
          <CardFooter>
              
          </CardFooter>
    </Card>
  )
}

export default CardWrapper
