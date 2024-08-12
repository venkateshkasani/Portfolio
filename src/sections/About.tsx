import React, { useRef } from 'react'
import gsap from 'gsap'
import TimelineComp from './TimelineComp';
import emailjs from '@emailjs/browser'

export const AboutTimeline = () => {
  const tl = gsap.timeline();
  tl.to('.about',{
  opacity:1,
  y:0,
  duration:0.2  
  })
  return tl;
}
const About:React.FC = () => {
  return(
  <section id='about_section' className='about mx-6 opacity-0 transform translate-y-[50px]'>
  <div className='flex flex-col'>
  <p id='heading' className='text-lg md:text-2xl lg:text-4xl text-slate-400 my-5'>My academic journey</p>
  <TimelineComp />  
  </div>
  </section>
)}

export default About