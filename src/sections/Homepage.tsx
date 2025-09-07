import React, { useEffect } from 'react'
import CardsComponent,{CardsTimeline} from './CardsComponent';
import About,{AboutTimeline} from './About';
import Projects,{ProjectsTimeline} from './Projects';
import Footer,{FooterTimeline} from './Footer';
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
   <div>
  <CardsComponent />
   <About />
   <Projects />
   <Footer />
   </div>
  )
}

export default Homepage

