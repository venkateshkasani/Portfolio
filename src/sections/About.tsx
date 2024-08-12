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
  const form = useRef<HTMLFormElement>(null);
  const sendEmail  = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (form.current) { // Check if form.current is not null
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: '79p3_RZFq-UrX-UjU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error: { text: string }) => {
          console.log('FAILED...', error.text);
        },
      );
  } else {
    console.log('Form ref is null');
  }
};
  return(
  <section id='about_section' className='about mx-6 opacity-0 transform translate-y-[50px]'>
  <div className='flex flex-col'>
  <p id='heading' className='text-lg md:text-2xl lg:text-4xl text-slate-400 my-5'>My academic journey</p>
  <TimelineComp />  
  </div>
  </section>
)}

export default About