import React from 'react'
import '../css/Project.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({data}) => {
  return (
    <div>
     <div className="project-container">
        <div className="image-container"><img src={data.imagelink} alt="project" /></div>
        <div className="description">
            <h3>{data.projectTitle}</h3>
            <p>{data.description}</p>
            <h5>Technologies Used: {data.technonlogies}</h5>
            <Link to={data.projectlink} target="_blank"><button className='cta-buttons'>See Project</button></Link>
        </div>
    </div> 
    </div>
  )
}

export default ProjectCard
