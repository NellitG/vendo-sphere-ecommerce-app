import { useState } from "react"
import Form from "../components/form"



const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const login = {
        type: 'Login',
        fields: [
            {
                name: 'email',
                type: 'email',
                label: 'Email',
                value: credentials.email,
               
            },
            {
                name: 'password',
                type: 'password',
                label: 'Password',
                value: credentials.password
            }
        ]
        ,
        handleChange:
        (e) => {
            setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
            })
        },
        handleSubmit:
            () => {
                
                console.log(
                    'email: ', credentials.email, ' Password: ', credentials.password
                )
            }
        ,
        show: {
            text: 'Don\'t have an account?',
            link: '/register',
            linkText: 'Sign Up'
        }
      

    }



    return (
        <Form data={login} credentials={credentials} setCredentials={setCredentials} />
    )
}

export default Login