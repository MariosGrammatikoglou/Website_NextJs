import Link from 'next/link'
import React from 'react'

async function fetchRepoContents(name){
    //wait for laoding
    await new Promise((resolve)=> setTimeout(resolve,3000))
    const res = await fetch(`https://api.github.com/repos/MariosGrammatikoglou/${name}/contents`,
        { 
            next:{
               revalidate: 60 //fetch fresh data each 60 secs
           }
        }
    )
    const contents = await res.json()
    return contents
}



const RepoDirs = async({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <>
        <h3 className='text-xl '>Directories</h3>
        -
        {dirs.map((dir)=> (
            <li key={dir.path}>
                <Link href={`https://www.github.com/MariosGrammatikoglou/${name}/tree/master/${dir.path}`} className='text-xl underline decoration-blue-600 decoration-solid text-blue-600'>
                {dir.path} 
            </Link>
            </li>
        ))}
        
    </>
  )
}

export default RepoDirs