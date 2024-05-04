import React from 'react'
import Project from './Data/Project.png'
import arrow from './Data/arrow.svg'
import github from './Data/github.svg'

export const Work = () => {
  return (
    <div className='bg-sky-100 h-screen'>
      <div className='w-5/6 m-auto flex'>
        {/* image part */}
        <div className='h-[96vh] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <img className='bg-cover h-[96vh]' src={Project} alt="" />
        </div>
        {/* Text Part */}
        <div className='h-[96vh] w-3/6 ml-12 leading-8 flex flex-col justify-center'>
          {/* Text Part1 */}
          <img className='ml-auto' src="https://www.karishma.dev/projects/explord/linkLogo.svg" alt="" />
          {/* text part2 */}
          <div>
            <h1 className='text-4xl font-bold my-6'>EXPLORD</h1>
            <p className='text-[1.25rem] text-justify'>Blog website for a US-based company using WordPress, incorporating stunning UI design and adhering to SEO best practices. Additionally, I seamlessly integrated Google Analytics for valuable insights into user behavior and content performance.</p>
            <p className='text-[1.25rem] my-4'><span className='font-bold'>Built with:</span> Next.js, TypeScript, Tailwind CSS, MongoDB, SendGrid</p>
          </div>
          {/* Text Part 3 */}
          <div className='grid grid-cols-2 gap-8 my-8'>
          {/* BTN 1 */}
          <div class="hover:bg-black hover:pr-1">
          <a href="#Home" class="bg-yellow-50 flex items-center justify-center w-full px-2 py-2 text-sm font-medium leading-6 capitalize duration-100 transform border-2 outline outline-offset-2 outline-1  outline-blue-500 cursor-pointer focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
          <img src={github} alt="" /> <span className='text-[1.5rem] leading-6 ml-2'>VIEW CODE</span>
          </a>
          </div>
            {/* BTN 2 */}
          <div class="hover:bg-black hover:pr-1">
          <a href="#Home" class=" bg-blue-400 flex items-center justify-center w-full px-2.5 py-2.5 text-sm font-medium leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
          <img src={arrow} alt="" /> <span className='text-[1.5rem] leading-6 ml-2'>VIEW SITE</span>
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
