import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='border-b-4 border-black pb-4 pt-3'>
        <div>
            <div className='font-bold flex justify-center text-4xl'> 
                <h1>NextJs_Project</h1>
            </div>
            <div>
                <ul className='flex justify-center space-x-5 text-2xl pt-2'>
                    <li className='hover:underline'><Link href="/">Home</Link></li>
                    <li className='hover:underline'><Link href="/about">About</Link></li>
                    <li className='hover:underline'><Link href="/repos">Project</Link></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header