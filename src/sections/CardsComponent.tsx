import { useEffect } from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { Link, Events, scrollSpy } from 'react-scroll';
// Must register the plugin before using.
gsap.registerPlugin(TextPlugin)
export const CardsTimeline = () => {
  const intro:string = "I'm Venkatesh. A developer transforming visionary ideas into reality."
  const tl = gsap.timeline();
  console.log("called")
  tl.fromTo((".hello"),{
    y:10,
    opacity:0
  },{
    y:0,
    duration:1,
    ease:"power1.inOut",
    opacity:1
  })
  .to(('.intro') , {
    text:{
      value:intro,
      delimiter:"",
      speed:2
    }
  })
  .fromTo(('.about'),{
   opacity:0,
   y:10
  },{
    opacity:1,
    y:0,
    stagger:0.1
  },"+=2")
return tl;
}
const CardsComponent = () => {
  const linkToResume = "https://drive.google.com/file/d/1eJHTX-GpUMVNWujPcT2cmM_cpLRBSwHj/view?usp=sharing"
    // scroll - necessities
    useEffect(() => {
    
      // Registering the 'begin' event and logging it to the console when triggered.
      Events.scrollEvent.register('begin', (to:string, element:HTMLElement) => {
        console.log('begin', to, element);
      });
  
      // Registering the 'end' event and logging it to the console when triggered.
      Events.scrollEvent.register('end', (to:string, element:HTMLElement) => {
        console.log('end', to, element);
      });
  
      // Updating scrollSpy when the component mounts.
      scrollSpy.update();
  
      // Returning a cleanup function to remove the registered events when the component unmounts.
      return () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      };
    }, []);
  
  return (
    <section className='md:px-0 sm:pl-2 pl-0 mx-6'>
     <div className='text-white w-[100vw] pt-2 px-4 mb-7'>
        <p id='intro1'  className='hello font-mono my-5 text-slate-600 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold'>Hello there!!</p>
        <p id='intro2' className='intro font-mono text-start text-wrap text-xl sm:text-2xl md:text-3xl lg:text-5xl text-slate-500 px-4'></p>
    </div>
    <div>
      <div className="testimonials px-4 mb-5 flex flex-col md:flex-row gap-10 justify-between pb-5 w-[100%]">
        <div id='profileCard' className="about w-[90%] sm:[w-40%] lg:w-[20%] transition-shadow duration-500 ease-in-out shadow-sky-900 hover:shadow-sky-700 hover:cursor-pointer  shadow-2xl rounded-2xl">
        <Link 
      activeClass="active" 
      to="about_section"
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={1500} 
    >
        <img src='/img/profile.jpg' className='rounded-t-2xl' />
        <p className='font-light py-2 text-slate-400 hover:text-slate-300 transition-all font-sans'>From Classroom to Code:<br/> My academic Journey in Tech</p>
        </Link>
        </div>
    <div className="about w-[90%] sm:[w-40%] lg:w-[20%] border-4 border-slate-900 flex flex-col justify-between rounded-2xl duration-500 ease-in-out shadow-sky-900 hover:shadow-sky-700 hover:cursor-pointer  shadow-2xl">
    <Link 
      activeClass="active" 
      to="project_section"
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={1500} 
    >
        <img src='/img/project1.png' className='rounded-2xl p-9 hover:scale-105 transition-all duration-500'/>
        <div className='font-light font-sans py-2 text-slate-400 hover:text-slate-300 transition-all my-auto flex items-center justify-center'><p>Projects</p></div>
        </Link>
        </div>
        <div className="about w-[90%] sm:[w-40%] lg:w-[20%] border-4 border-slate-900 rouneed-md duration-500 ease-in-out shadow-sky-900 hover:shadow-sky-700 hover:cursor-pointer  shadow-2xl rounded-2xl">
        <Link 
      activeClass="active" 
      to="experience_section" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={1500} 
      >
        <img src='/img/experience.png'className='rounded-2xl p-5  hover:scale-105 transition-all duration-500' />
        <p className='font-light font-sans py-2 text-slate-400 hover:text-slate-300 transition-all pt-2'>Experience</p>
        </Link>
        </div>
        <div className="about w-[90%] sm:[w-40%] lg:w-[20%] border-4 border-slate-900 duration-500 ease-in-out shadow-sky-900 hover:shadow-sky-700 hover:cursor-pointer  shadow-2xl rounded-2xl flex flex-col justify-around">
        <a href={linkToResume} target='blank'>
        <img className='mx-auto hover:scale-105 transition-all duration-500' src='/img/resume.svg' width='75%' height='75%' />
        <p className='font-light py-2 text-slate-400 hover:text-slate-300 transition-all font-sans'>View resume</p>
        </a>
        </div >
      </div>
    </div>
   </section>
  )
    }

export default CardsComponent