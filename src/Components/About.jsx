import React from 'react'
import Skillsdata from './Data/Skillsdata.json'

export const About = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
    {Skillsdata.map((person, index) => (
      <div key={index} className="flex items-center space-x-4">
        <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full" />
        <h2 className="text-xl font-medium">{person.name}</h2>
      </div>
    ))}
  </div>
  )
}
