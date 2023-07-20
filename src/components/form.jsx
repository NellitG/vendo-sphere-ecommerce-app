
import PropTypes from 'prop-types'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Show_Prompt from '../utils/alert';
const Form = ({ data }) => {
    const [isShow,setIsShow] = useState(false)
    const navigate  = useNavigate()

    const onSubmit = (e) =>{
        e.preventDefault()
        data.handleSubmit()
        setIsShow(true)
        setTimeout(() => {
            setIsShow(false)
            navigate('/')
        }
            , 1000)
    }
    return (


        <div className='w-screen h-[100dvh] grid place-content-center  place-items-end'>
            {
                isShow && <Show_Prompt message={`${data.type} Successfully`} type='success' />
            }
            <Card color="transparent" className='p-2 px-3 translate-y-[5%] md:p-10 border-2 shadow-xl' shadow={false}>
                <Typography variant="h4" className='text-[var(--primary-color)]'>
                    {data.type}
                </Typography>
                <Typography color="gray" className="mt-1 font-normal ">
                    Enter your details to {data.type}.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                        {
                            data.fields.map((field) => {
                                return (
                                    <Input
                                        key={field.name}
                                        type={field.type}
                                        name={field.name}
                                        size="lg"
                                        label={field.label}
                                        value={field.value}
                                        onChange={data.handleChange}
                                        required
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        data.type === 'Register' &&
                        <Checkbox
                           color='blue-gray'
                           ripple={true}
                            label={
                                (
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-blue-500"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                )
                            }
                            containerProps={{ className: "-ml-2.5" }}
                            required
                        />
                    }
                    <Button type='submit' className="mt-6 bg-[var(--primary-color)]" fullWidth>
                        {data.type}
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        {data.show.text}{" "}
                        <NavLink
                            to={data.show.link}
                            className="font-medium text-[var(--primary-color)] transition-colors hover:text-blue-700"
                        >
                            {data.show.linkText}
                        </NavLink>
                    </Typography>
                </form>
            </Card>
        </div>
    )
}

export default Form

Form.propTypes = {

    data: PropTypes.object.isRequired

}