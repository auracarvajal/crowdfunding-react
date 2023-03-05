import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneProject } from "../data";

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: []});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        })
    })


    return(
        <div>

            <div className="div1">
            <img src={projectData.image} />
            </div>

            <div className="div2">
            <h2 style={{color:"#f1356d"}}>{projectData.title}</h2><br></br>
            <h3>{projectData.description}</h3><br></br>
            <h3>Goal: $ {projectData.goal}</h3><br></br>
            <h3>Created at: {projectData.date_created}</h3><br></br>
            <h3>{`Status: ${projectData.is_open}`}</h3><br></br>
            <h3>Pledges: </h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (<li>{pledgeData.amount}</li>
                    );
            })}
            </ul>

            <div className='detail-button-submit'>
                <button>
                Donate now
                </button>
            </div>

            </div>
        </div>
        );
    }


export default ProjectPage;