import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps{
    message?: string
}

export const FormError = ({ message }: FormErrorProps) => { 

    if (!message) {
        return null;
    }
    return (
        <div className="bg-destructive/15 p-3 rounded-md flex h-9 px-4 py-2 items-center gap-x-5 text-small text-destructive justify-center  ">
            <BsExclamationTriangle className="size-4" />
            <p>{message}</p>

        </div>
    )
}
