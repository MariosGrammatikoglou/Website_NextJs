'use client'

import React from 'react'
import { useState } from 'react'

const ProjectSearch = ({getSearchResults}) => {
    const [query,setQuery] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const res = await fetch(`/api/projects/search?query=${query}`)
        const projects = await res.json()
        getSearchResults(projects)
    }

  return (
    <form onSubmit={ handleSubmit } className='mt-3 p-2'  >
        <input type="text" placeholder='Search project...' value={ query } onChange={
            (e) => setQuery(e.target.value)} className=' focus:outline-zinc-300  border-4 border-black rounded-md p-1'/>
        <button type='submit' className='border-4 border-black rounded-md ml-2 p-1 bg-white font-bold hover:border-zinc-600 text-black hover:text-zinc-800'>Search</button>
    </form>
  )
}

export default ProjectSearch