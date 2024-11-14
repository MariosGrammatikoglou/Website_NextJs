'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link' 
import LoadingPage from './loading'
import Projects from './components/Projects'
import ProjectSearch from './components/ProjectSearch'

const HomePage = () => {
  const [projects,setProjects] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    const fetchProjects = async()=>{
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data)
      setLoading(false)
    }

    fetchProjects()
  },[])

  if(loading){
    return <LoadingPage />
  }

  return (
    <div className='w-8/12  m-auto'>
    <h1 className='justify-center flex pt-3 font-bold text-3xl'>HOME PAGE</h1>
    <ProjectSearch getSearchResults={(results)=> setProjects(results)}/>
    <Projects projects={projects} />
    </div>
  )
}

export default HomePage