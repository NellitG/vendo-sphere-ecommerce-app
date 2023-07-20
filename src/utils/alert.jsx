import { Alert } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types'
import { useEffect } from "react";

const  Show_Prompt = ({ message, type }) => {
    const status = [
        {
            type: 'success',
            icon: <CheckCircleIcon className="mt-px h-6 w-6" />,
            className: 'bg-[#2ec946]/10 text-[#2ec946] border-[#2ec946]'
        },
        {
            type: 'error',
            icon: <CheckCircleIcon className="mt-px h-6 w-6" />,
            className: 'bg-[#f44336]/10 text-[#f44336] border-[#f44336]'
        }
    ]


    return (
       
        <Alert
            icon={
                status.map(item => item.type === type ? item.icon : '')
            }
            className={status.map(item => item.type === type ? item.className : '') + " border-l-4  rounded-none font-medium"} >
            {message}
        </Alert>
    )
}
export default Show_Prompt;
Show_Prompt.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}