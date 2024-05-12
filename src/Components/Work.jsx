import React from 'react'
import Projectimg from './Data/Project.png'
import arrow from './Data/arrow.svg'
import github from './Data/github.svg'
import Project from './Data/Project/Project.json'
export const Work = () => {
  return (
    <>
      {Project.map((project, index) => (    
      <div className='bg-sky-100 h-screen'>
      <div className='w-5/6 m-auto flex' key={index}>
        {/* image part */}
        <div className='h-[96vh] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <iframe className='w-[40vw] h-full'  src={project.url} frameborder="0" scrolling="no"></iframe>
        </div>
        {/* Text Part */}
        <div className='h-[96vh] w-3/6 ml-12 leading-8 flex flex-col justify-center'>
          {/* Text Part1 */}
          <img className='ml-auto text-2xl font-bold' src={project.logo} alt={project.logo} />
          {/* text part2 */}
          <div>
            <h1 className='text-4xl font-bold my-6'>{project.name}</h1>
            <p className='text-[1.25rem] text-justify'>{project.description}</p>
            <p className='text-[1.25rem] my-4'><span className='font-bold'>Built with:</span> {project.builtwith}</p>
          </div>
          {/* Text Part 3 */}
          <div className='grid grid-cols-2 gap-8 my-8'>
          {/* BTN 1 */}
          <div class="hover:bg-black hover:pr-1">
          <a href={project.viewcode} target='_blank' class="bg-yellow-50 flex items-center justify-center w-full px-2 py-2 text-sm font-medium leading-6 capitalize duration-100 transform border-2 outline outline-offset-2 outline-1  outline-blue-500 cursor-pointer focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
          <img src={github} alt="" /> <span className='text-[1.5rem] leading-6 ml-2'>VIEW CODE</span>
          </a>
          </div>
            {/* BTN 2 */}
          <div class="hover:bg-black hover:pr-1">
          <a href={project.viewsite} target='_blank' class=" bg-blue-400 flex items-center justify-center w-full px-2.5 py-2.5 text-sm font-medium leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
          <img src={arrow} alt="" /> <span className='text-[1.5rem] leading-6 ml-2'>VIEW SITE</span>
          </a>
          </div>
          </div>
        </div>
      </div>
      </div>
       ))}
    </>
  )
}
