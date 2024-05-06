import React, { useState } from 'react';
import { About } from '../About';
import { Skills } from '../Skills';
import { Work } from '../Work';
import { Contact } from '../Contact';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-sky-100 m-3 h-screen'>
        <Navbar scrollToSkills={scrollToSkills} scrollToAbout={scrollToAbout} scrollToWork={scrollToWork} scrollToContact={scrollToContact}/>
        <div id='about-section'><About/></div>
        <div id='skills-section'><Skills/><div className='h-20 bg-sky-100'></div></div>
        <div id='work-section'><Work/></div>
        <div id='contact-section'><Contact/></div>
        <Footer scrollToTop={scrollToTop}/>
        <div className='h-4'></div>
    </div>
  );
};
