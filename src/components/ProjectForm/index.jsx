import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectForm (){

    const [ formdata, setformdata ]= useState({
        "title": '',
	    "description": '',
        "goal": '',
	    "image": '',
	    "is_open": true,
	
    })

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setformdata((prevformdata) => ({
        ...prevformdata,
        [id]: value,
        }))
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formdata)
            postData().then((response) => {
            console.log(response)
                navigate("/");
            });
        
    };

    const postData = async () => {
        const token =  window.localStorage.getItem("token");

        const response = await fetch (
        `${import.meta.env.VITE_API_URL}projects/`,
        {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization": `token ${token}`
        },
        body: JSON.stringify(formdata),
        }
        );
        return response.json();
    };
  
    
      return (
        <div className="form">
        <form>
            <h1 className='title-form'>CREATE A NEW PROJECT</h1><br></br>
           
          <div className='form-option'>
            <label>
            Type of Project: </label>
            <select id="cause" onChange={handleChange}>
                <option value="medicalemergency">MedicalEmergency</option>
                <option value="accident">Accident</option>
                <option value="funeralexpenses">FuneralExpenses</option>
            </select>
          </div>
           
            <div className='title-input-form'>
            <label htmlFor='title'>Project Title:</label>
            <input type='text' id='title' placeholder='Enter title' onChange={handleChange}/>
            </div>
          
    
            {/* <select id="cause" onChange={handleChange}>
                <option value="medicalemergency">MedicalEmergency</option>
                <option value="accident">Accident</option>
                <option value="funeralexpenses">FuneralExpenses</option>
            </select> */}
            
         

          <div className='title-form-project'>
            <label>Add a Description: </label> 
            <textarea id="description" placeholder='Enter description here ...' onChange={handleChange}/>
          </div>

          

          <br/>
         
        <div className='form-upload-image'>
          <label>Upload an Image:</label>
          <input id="image" placeholder='image url' type="url"  onChange={handleChange}/>
        </div>

        <br/>
        
        <div className='form-goal'>
        <label>Raise Goal: </label>
          <input id="goal"  placeholder='$' type="text"  onChange={handleChange}/>   
        </div>

        <br/>

        <div className='form-button'>
        <button type='submit' onClick={handleSubmit}>
            Submit
        </button>
        </div>
        </form>
      </div>
    );
}


export default ProjectForm;