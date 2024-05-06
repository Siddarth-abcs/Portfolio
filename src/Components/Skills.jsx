import React from 'react'
import Skillsdata from './Data/Skillsdata.json'

export const Skills = () => {
  return (
      <div className='bg-sky-100 h-[90vh] py-20'>
      <div className='w-5/6 m-auto mb-16'>
      <h1 className='text-6xl my-16 leading-10 font-medium text-left'>Check Out My Tech Stack</h1>
      <div className="mt-24 grid grid-cols-4 gap-x-0 gap-y-12">
      {Skillsdata.map((person, index) => (
        <div key={index} className="flex items-center hover:rotate-12 space-x-4 flex flex-col">
          <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-medium">{person.name}</h2>
        </div>
      ))}
      </div>
      </div>
      </div>
  )
}
