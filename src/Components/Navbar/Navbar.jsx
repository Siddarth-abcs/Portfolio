  import React from 'react'
  import LOGO1 from './LOGO1.svg'
  import { Link } from 'react-router-dom'
  import { Skills } from '../Skills'

  export const Navbar = ({ scrollToSkills, scrollToAbout, scrollToWork, scrollToContact }) => {
    return (
      <div>
          <div className='mr-8 block w-24 fixed top-80 right-8 text-right border-r-2 border-sky-500'>
            <div className='py-2 mr-2 font-medium' onClick={scrollToAbout} >ABOUT</div>
            <div className='py-2 mr-2 font-medium' onClick={scrollToSkills}>SKILLS</div>
            <div className='py-2 mr-2 font-medium' onClick={scrollToWork}>WORKS</div>
            <div className='py-2 mr-2 font-medium' onClick={scrollToContact}>CONTACT</div>
          </div>
      </div>
    )
  }
