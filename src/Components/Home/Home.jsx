import React from 'react'
import { About } from '../About'
import { Skills } from '../Skills'
import { Work } from '../Work'

export const Home = () => {
  return (
    <div className='bg-sky-100 m-3 h-screen'>
        <About/>
        <Skills/>
        <Work/>
    </div>
  )
}
