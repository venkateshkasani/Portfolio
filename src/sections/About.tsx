import gsap from 'gsap'
import TimelineComp from './TimelineComp';
import Skills from './CustomComponents/Skills';

export const AboutTimeline = () => {
  const tl = gsap.timeline();
  tl.to('.about',{
  opacity:1,
    y: 0,
  ease:"power2.in",
  duration:0.2  
  })
  return tl;
}
const About:React.FC = () => {
  return(
  <section className='mb-10 about opacity-0'>
  <div className='flex flex-col'>
        <h2 className='text-2xl md:text-4xl text-gray-600 font-semibold my-10'>My journery</h2>
        <TimelineComp /> 
  <Skills />      
  </div>
  </section>
)}

export default About