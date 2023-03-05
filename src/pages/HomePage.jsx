import React, { useState, useEffect }from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";



function HomePage() {
const [projectList, setProjectList] = useState([]);
const navigate=useNavigate()

useEffect(() => {
    fetch (`${import.meta.env.VITE_API_URL}projects`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data);
    });
//  setProjectList(allProjects)
}, [])


    return(  

        

        <div className="body-style">
            <div className="container-image">
            
            <div className="button-container">         
            <button onClick={(e) => {navigate("/login")}}>Login</button>
            
            </div>
         </div>
          
        

        <div className="img-support">
            <img src="/images/kind-support.png" />
        </div>

        
        {/* <div className="projectlist">{projectList.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
        })}
        </div> */}

        <div className="button-case-support">
        <button onClick={(e) => {navigate("/projectlist")}}>
            PROJECT LIST
        </button>
        </div>

        <div className="how-create-project">
            <img src="/images/how-create-project.png" />
        </div>

        <div className="footer">
            <p> Copyright  2023 |  All Rights Reserved </p>
        </div>
            
        </div>

    );
}

export default HomePage;