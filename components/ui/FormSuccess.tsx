import { BsCheckCircle } from "react-icons/bs";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) {
        return null;
    }

    return (
        <div className="bg-emerald-500/15 rounded-md flex gap-2 h-9 px-4 py-2 items-center  text-sm text-emerald-500 justify-center">
            <BsCheckCircle className="size-4" />
            <p>{message}</p>
        </div>
    );
};

