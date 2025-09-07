import React from 'react'
import gsap from 'gsap'
import ProjectComponent from './ProjectComponent'
import {Ecommerce,Apple,Martizine, Washtog, Antsq, Chainmint} from '../helpers/data'
export const ProjectsTimeline = () => {
  const tl = gsap.timeline();
  tl.to('.projectSection',{
  opacity:1,
  y:0,
  duration:0.2  
  })
  return tl;
}
const Projects:React.FC = () => {
  return (
    <section className='my-5 px-5 md:px-8'>
      <p className='text-lg md:text-3xl  lg:text-5xl text-slate-600 mb-10'>Projects</p>
        <div className='sm:flex gap-5 flex-wrap justify-between'>
        <ProjectComponent data = {Antsq} />
        <ProjectComponent data = {Washtog} />
        <ProjectComponent data = {Martizine} />
        <ProjectComponent data = {Apple}/>
        <ProjectComponent data = {Chainmint} />
        <ProjectComponent data = {Ecommerce} />
        </div>
    </section>
  )
}

export default Projects