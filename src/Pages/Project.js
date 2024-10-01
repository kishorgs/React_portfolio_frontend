import React, { useEffect, useState } from 'react'
import '../css/Project.css'
import ProjectCard from '../components/ProjectCard'
import { BASE_URL } from '../helper'

const Project = ({setProgress}) => {
  
    
const [data,setdata]=useState([])

const getProject= async()=>{
         setProgress(10)
        const response=await fetch(`${BASE_URL}/getprojects`,{
            method:'GET'   
        })
        const json=await response.json()
        setdata(json)
        setProgress(100)
    }
    useEffect(()=>{
       getProject()
       // eslint-disable-next-line
    },[])

  return (
    <>
    <h1 className='heading'>My Projects</h1>
    {data.map((projectdata)=>{
        console.log(projectdata)
     return <ProjectCard data={projectdata}/>
    })}
    </>
  )
}

export default Project
