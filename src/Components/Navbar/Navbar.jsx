import React from 'react'
import LOGO1 from './LOGO1.svg'

export const Navbar = () => {
  return (
    <div>
        <div className='w-10/12 m-auto flex items-center justify-between'>
            <div>
                <img className='h-36' src={LOGO1} alt='logo hai'/>
            </div>
            <div className='text-2xl text-right'>
            Find me on <span className='font-medium underline'>GitHub</span>,<span className='font-medium underline'> LinkedIn</span>, and <span className='font-medium underline'>Twitter.</span> <br />
            Download <span className='font-medium underline'>my resume</span> (PDF, 952 kb)
            </div>
        </div>
    </div>
  )
}
