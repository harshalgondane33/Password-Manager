import React from 'react'
import About from './About'
const Navbar = () => {
  return (
    <nav className='bg-indigo-900 flex justify-around items-center px-4 h-14'>
      <h1 className="logo font-bold text-xl text-gray-400"><span className='text-gray-800'>&lt;</span><span> Pass</span><span className='text-gray-800'>Op/</span><span className='text-gray-800'>&gt;</span></h1>
      <ul>
        <li className='flex gap-3'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='/about'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
