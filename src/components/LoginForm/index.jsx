import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(){
const [credentials, setCredentials ] = useState({
    username: '',
    password: '',

});
const navigate = useNavigate();

const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
    ...prevCredentials,
    [id]: value,
    }))
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (credentials.username && credentials.password) {
        postData().then((response) => {
            window.localStorage.setItem("token", response.token);
            navigate("/");
        });
    }
};



const postData = async () => {
        const response = await fetch (
        `${import.meta.env.VITE_API_URL}api-token-auth/`,
        {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };



    return(
        <form>

        <div>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' placeholder='Enter username' onChange={handleChange}/>
        </div>
   

        <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' placeholder='password'onChange={handleChange}/>
        </div>

        <button type='submit' onClick={handleSubmit}>
            Login
        </button>

        </form>
    );
}

export default LoginForm;