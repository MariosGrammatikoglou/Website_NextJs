import React from 'react'
import Link from 'next/link'


const Projects = ({ projects }) => {  
  return (
    <div className='border-t-4 border-black border-b-4'>
      <div className='m-3 mb-4'>
          { projects.map((project) => (
              <div key={project.id} className='border-2 rounded-lg border-black mb-4 p-3 bg-zinc-50'>
                  <h2 className='font-bold text-2xl underline mb-1'>{project.title}</h2>
                  <p className='text-xl mb-1'>{project.description}</p>
                  <Link href={project.link} target="_blank" className=' font-bold text-md text-blue-600  underline decoration-blue-600 decoration-solid'> {/* target blank anoigei s nea selida to link */}
                    Go To Project
                  </Link>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Projects