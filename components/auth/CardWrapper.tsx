import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import Header from './header' // Assuming 'header' is a React component

interface CardWrapperProps {
    children: React.ReactElement;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                {/* Assuming Header is a reusable component */}
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {/* Render children inside CardContent */}
                {children}
            </CardContent>
            <CardFooter>
                <div className="flex justify-between items-center">
                    {/* Back button */}
                    <a href={backButtonHref} className="text-blue-500 hover:underline">
                        {backButtonLabel}
                    </a>
                    {/* Social buttons (conditionally rendered) */}
                    {showSocial && (
                        <div>
                            {/* Add social buttons here */}
                            <button className="text-gray-500 hover:text-gray-700">Social Login</button>
                        </div>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;
