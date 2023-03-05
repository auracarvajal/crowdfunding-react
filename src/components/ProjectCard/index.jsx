import React from 'react';
import {Link} from 'react-router-dom';

function ProjectCard(props){
    const {projectData} = props;
    return(
        <div>
            <Link to={`/project/${projectData.id}`}>
                <img style={{width:300, height:300}} src={projectData.image} />
                <h3>{projectData.title}</h3>
                
            </Link>
        </div>
    );
}

export default ProjectCard;