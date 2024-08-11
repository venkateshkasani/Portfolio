import React, { useEffect } from 'react'
import CardsComponent,{CardsTimeline} from './CardsComponent';
import About,{AboutTimeline} from './About';
import Projects,{ProjectsTimeline} from './Projects';
import Footer,{FooterTimeline} from './Footer';
import { MediaLinks } from '../helpers/data';
import gsap from 'gsap';

const Homepage:React.FC = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.add(CardsTimeline())
    tl.add(AboutTimeline())
    tl.add(ProjectsTimeline())
    tl.add(FooterTimeline())
  },[])
  return (
   <div className='mx-0'>
  <CardsComponent />
   <About />
   <Projects />
   <Footer links = {MediaLinks} />
   </div>
  )
}

export default Homepage

