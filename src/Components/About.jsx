import React from 'react'
import LOGO1 from './Navbar/LOGO1.svg'
import Siddarth from './Data/Name/Siddarth.svg'
import Lottie from "lottie-react";
import Animation from './Data/Animation.json'


export const About = () => {
  return (
      <div>
          <div className='w-10/12 m-auto flex items-center justify-between'>
          <div>
              <img className='h-36' src={LOGO1} alt='logo hai'/>
          </div>
          <div className='text-2xl text-right'>
          Find me on <a href='https://github.com/Siddarth-abcs' target='._blank' className='font-medium underline'>GitHub</a>,<a href='https://www.instagram.com/developer_siddarth/' target='._blank' className='font-medium underline'> Instagram</a>, and <span className='font-medium underline'>Twitter.</span> <br />
          Download <a href='https://drive.google.com/file/d/1jItMo6kbZifa3ZRRG0WNr4X5Hm1HFtMG/view?usp=drive_link' target='._blank' className='font-medium underline'>my resume</a> (PDF, 952 kb)
          </div>
          </div>

          <div className='w-5/6 m-auto h-[70vh] flex'>
          <div className='w-3/6 mt-24 mr-12'>
            <h1 className='text-4xl font-bold flex items-center'>Hi, my name is  <img src={Siddarth} className='ml-4' alt="Siddarth" /></h1>
            <p className=' text-[1.2rem] my-8'>As a frontend developer, I blend the art of UI/UX design and the science of SEO to create stunning websites with meticulous attention to detail that captivate audiences and drive results.</p>
            <p className=' text-[1.2rem]'>I'm not just a team player – I'm the secret sauce that elevates projects to jaw-dropping heights.</p>
            <a href="mailto:siddarthabcs@gmail.com">
            <button type="button" class="px-6 py-3.5 my-8 text-[1.3rem] font-medium text-white bg-blue-600 hover:bg-white shadow-lg text-center hover:text-blue-800">
            LET'S WORK TOGETHER
            </button>
            </a>
          </div>
          <div className=''>
          <Lottie animationData={Animation} loop={true} />
          </div>
          </div>
      </div>
  )
}
