import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function LoginForm(){
const [credentials, setCredentials ] = useState({
    username: '',
    password: '',

});


const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
    ...prevCredentials,
    [id]: value,
    }))
};

const navigate = useNavigate();

const [formError, setFormError] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (credentials.username && credentials.password) {
        postData().then((response) => {
            window.localStorage.setItem("token", response.token);
            window.localStorage.setItem("username", credentials.username);
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
        })
        if (response.ok) {
            setFormError(false);
            return response.json()
        } else {
            setFormError(true);
            return
        }
   
    }

    return(

        <div className='loginform'>

            <h1 className='title-login'>Login</h1>

        <form>

        <div className='username-style'>
            <label htmlFor='username'>USERNAME</label><br></br>
            <input type='text' id='username' placeholder='Enter username' onChange={handleChange}/>
        </div>
   

        <div className='password-login-style'>
            <label htmlFor='password'>PASSWORD</label><br></br>
            <input type='password' id='password' placeholder='password'onChange={handleChange}/>
        </div>

       <div className='login-button'>
        <button type='submit' onClick={handleSubmit}>
            Login
        </button>
        </div>

        {
            formError && 
            <div>
                <p>The username and password you entered does not match our records. Please try again.</p>
                <p>If you don't have an account, please sign up for one <Link to={`/signup`}><b>here</b></Link>.</p>
            </div>
        }

        </form>
    </div>
    );
}

export default LoginForm;