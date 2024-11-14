import React from 'react'
import { FaStar,FaCodeBranch,FaEye } from 'react-icons/fa'

async function fetchRepo(name) {
    const res = await fetch(`https://api.github.com/repos/MariosGrammatikoglou/${name}`, 
       { 
        next:{
           revalidate: 60 //fetch fresh data each 60 secs
       }
    }
    )
    const repo = await res.json()
    return repo
}

const Repo = async ({name}) => {
    const repo = await fetchRepo(name)
    

  return (
    <div className=''>
        <h2 className='text-3xl font-bold underline mb-2'>{repo.name}</h2>
        <p className='text-xl mb-2'>{repo.description}</p>
        <div className='flex space-x-3 text-md mb-3 '>
            <FaStar /> {repo.stargazers_count}
            <FaCodeBranch /> {repo.forks_count}
            <FaEye /> {repo.watchers_count}
        </div>
    </div>
  )
}

export default Repo