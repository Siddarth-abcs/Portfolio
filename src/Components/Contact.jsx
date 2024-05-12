import React from 'react'

export const Contact = () => {
  return (
    <div className='h-[80vh] bg-white flex'>
      <div className='w-5/6 m-auto flex justify-center items-center'>
        {/* Image */}
        <div className='w-2/6 mr-16'>
          <img src="https://www.karishma.dev/vectors/laptop.svg" alt="" />
        </div>
        {/* Contact Form */}
        <div className='w-3/6'>
          <h1 className='text-4xl my-6 font-medium'>Let's build something extraordinary together!</h1>
          <p className='text-[1.25rem]'>Are you looking for someone who can turn your creative ideas into engaging digital experiences?</p>
          <div class="hover:bg-black hover:pr-1 w-4/6 my-6">
          <a href="mailto:siddarthabcs@gmail.com" target='_blank' class="text-3xl bg-blue-400 text-white flex items-center justify-center w-full py-4 text-sm font-medium leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
          SEND A MESSAGE
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}
