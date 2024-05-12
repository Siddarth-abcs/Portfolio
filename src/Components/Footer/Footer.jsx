import React from 'react';
import LOGO1 from '../Navbar/LOGO1.svg';
import github from './Githubft.svg';
import Linkdin from './Linkdinft.svg';
import Instagram from './Instagramft.svg';

export const Footer = ({ scrollToTop }) => {
  return (
    <div className='bg-sky-200 h-20'>
        {/* copyright part */}
        <div className='w-5/6 m-auto flex justify-between items-center'>
        <div className='flex items-center'>
            <img className='h-20' src={LOGO1} alt="logo hai mera" />
            <h4 className='leading-10 font-medium'>© 2024 Siddarth.dev. All rights reserved</h4>
        </div>
        <div className='grid grid-cols-3 items-center gap-3'>
            <a href="https://github.com/Siddarth-abcs" target='__blank'><img src={github} alt="" /></a>
            <a href="https://www.instagram.com/developer_siddarth" target='__blank'><img src={Instagram} alt="" /></a>
        </div>
        <button className="h-12 bg-blue-400 text-white px-4 py-2" onClick={scrollToTop}>
            BACK TO THE TOP
        </button>
        </div>
    </div>
  );
};
