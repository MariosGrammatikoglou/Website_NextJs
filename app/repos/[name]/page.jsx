import React from 'react'
import { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

const RepoPage = ({ params: {name} }) => {
  return (
    <div className='w-8/12  m-auto'>
      <div className='pt-3 mt-6 p-3'>
        <div className='mb-4'>
          <Link href="/repos" className='border-4 border-black rounded-md p-1 bg-white font-bold hover:border-zinc-600 hover:text-zinc-800'>
            Back to Repositories
          </Link>
        </div> 
        <div className='border-4 border-black rounded-xl mb-4 p-3 bg-zinc-50'>
          <Suspense fallback={<div>Loading repo...</div>}>
            <Repo name={name} />
          </Suspense>
          <Suspense fallback={<div>Loading directories...</div>}>
            <RepoDirs name={name} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default RepoPage