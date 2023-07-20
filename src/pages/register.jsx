import { useState } from "react"
import Form from "../components/form"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username:'',
        email: '',
        password: ''
    })

    const register = {
        type:'Register',
        fields:[
            {
                name:'username',
                type:'text',
                label:'Username',
                value:credentials.username
            },
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
        ],
        handleChange:
            (e) => {
                setCredentials({
                    ...credentials,
                    [e.target.name]: e.target.value,
                })
            }
            ,
        handleSubmit:
            () => {
                
                console.log(
                    'email: ', credentials.email, ' Password: ', credentials.password
                )
            }
        ,
        show: {
            text: 'Already have an account?',
            link: '/login',
            linkText: 'Sign In'
            }
            
    }

  return (
    <Form data={register} />
  )
}

export default Register