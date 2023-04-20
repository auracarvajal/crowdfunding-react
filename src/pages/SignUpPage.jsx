import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
    const [ register, setRegister ] = useState({
        username: "",
        email: "",
        password: "",
      });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setRegister((prevRegister) => ({
            ...prevRegister,
            [id]: value
        }));
    };

    const navigate = useNavigate();  

    const handleSubmit = (event) => {
        event.preventDefault();
        if (register.username && register.email && register.password) {
            postData().then((response) => {
                navigate('/login/')
            })
        }
    };

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
        })
        return response.json();
    };

    return (
        <div className="form-sign-up">

            <h1 className='title-sign-up'>Sign up</h1>

            <form>
            
            <div className="username-sign-up">
                <label htmlFor="username">Username:</label>
                <input type="text" onChange={handleChange} id="username" placeholder="Username"/>
            </div>

            <div className="email-sign-up">
                <label htmlFor="email">Email:</label>
                <input  type="email" id="email" onChange={handleChange} placeholder="Email"/>
            </div>

            <div className="password-sign-up">
                <label htmlFor="password">Password:</label>
                <input type="password"  id="password" onChange={handleChange} placeholder="Password"/>
            </div>
            
            <div className="button-sign-up">
            <button className="submit-sign-up" onClick={handleSubmit} type="submit">Sign Up</button>
            </div>

        </form>

        </div>
       
    )       

}


export default SignUpPage;






