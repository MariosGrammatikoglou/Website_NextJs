import React from 'react'

export const metadata = {
    title: "About Page"
}

const AboutPage = () => {
  return (
    <div className='w-8/12  m-auto'>
      <div className='mt-4 p-3 border-4 border-black rounded-xl bg-zinc-50'>
        <h1 className='justify-center flex font-bold text-3xl mb-4'>About Page</h1>
        <p className='text-xl pb-4 ml-4'>Projects at Home Page are loaded from a .json file and projects at Project Page are loaded from a URL on GitHub.</p>
      </div>
    </div>
  )
}

export default AboutPage