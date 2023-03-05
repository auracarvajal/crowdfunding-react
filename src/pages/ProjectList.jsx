import React, { useState, useEffect }from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectList() {
const [projectList, setProjectList] = useState([]);

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
           
          

        
        <div className="projectlist">{projectList.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
        })}
        </div>

      

        </div>
    );
}

export default ProjectList;