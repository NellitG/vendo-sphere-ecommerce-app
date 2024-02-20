import { useState } from "react";
import Form from "../components/form";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = {
    type: "Login",
    fields: [
      {
        name: "email",
        type: "email",
        label: "Email",
        value: credentials.email,
      },
      {
        name: "password",
        type: "password",
        label: "Password",
        value: credentials.password,
      },
    ],
    handleChange: (e) => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    },
    handleSubmit: async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/customer/login",
          credentials
        );

        // Assuming your API returns a JWT token
        const jwtToken = response.data.token;

        // You can now save the token to use in future requests or for authentication
        console.log("Login successful. JWT Token:", jwtToken);
      } catch (error) {
        console.error("Login Error", error);
      }
    },
    show: {
      text: "Don't have an account?",
      link: "/register",
      linkText: "Sign Up",
    },
  };

  return <Form data={login} credentials={credentials} setCredentials={setCredentials} />;
};

export default Login;
