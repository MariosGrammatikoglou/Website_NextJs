import React from 'react'
import Link from 'next/link'
import { FaStar,FaCodeBranch,FaEye } from 'react-icons/fa'


async function fetchRepos(){
    const res = await fetch('http://api.github.com/users/MariosGrammatikoglou/repos', 
        { 
         next:{
            revalidate: 60 //fetch fresh data each 60 secs
        }
})
    //wait for loading
    await new Promise((resolve)=> setTimeout(resolve,1000))
    
    const data = await res.json()
    return data
}

const ReposPage = async () => {
    const repos = await fetchRepos()

  return (
    <div className='w-8/12  m-auto'>
        <h2 className='justify-center flex pt-3 font-bold text-3xl mb-1 '>Repositories</h2>
        <h4 className='justify-center flex  font-bold text-xl mb-4 '>[click repo to explore]</h4>
        <ul className='border-t-2 border-black border-b-2 pt-4'>
            { repos.map((repo)=> (
                <li key={repo.id} className='border-2 rounded-lg border-black mb-4 p-3 bg-zinc-50'>
                    <Link href={`/repos/${repo.name}`}>
                        <h3 className='font-bold text-2xl underline mb-1'>{repo.name}</h3>
                        <p className='text-xl mb-1'>{repo.description}</p>
                        <div className='flex space-x-5'> {/* details repo class*/}
                            <span className='text-md'>
                                <FaStar className='inline-block'/> {repo.stargazers_count}
                            </span>
                            <span className='text-md'>
                                <FaCodeBranch className='inline-block' /> {repo.forks_count}
                            </span>
                            <span className='text-md'>
                                <FaEye className='inline-block' /> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    </div>
  )
}

export default ReposPage