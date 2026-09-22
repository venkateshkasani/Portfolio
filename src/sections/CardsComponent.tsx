import { useState, useEffect } from 'react';
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { DockDemo } from './Dock';
import { Highlighter } from '@/components/magicui/highlighter';
import AvatarModel from '../components/AvatarModel';

// Must register the plugin before using.
gsap.registerPlugin(TextPlugin)
export const CardsTimeline = () => {
  const intro:string = "I'm Venkatesh. A fullstack developer transforming visionary ideas into reality"
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
      speed:0.5
    },
    onComplete: () => {
      // Append the animated loading dots class right after typing finishes!
      document.querySelector('.intro')?.classList.add('animate-loading-dots');
    }
  })
  .fromTo(('.about'),{
   opacity:0,
   y:10
  },{
    opacity:1,
    y:0,
    stagger:0.1
  },"+=7")
return tl;
}
const CardsComponent = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only render the 3D model if we are on a screen wider than 768px (tablets/laptops)
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize(); // Check initially
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className='md:px-0 sm:pl-2 pl-0 mx-4 relative min-h-[85vh] flex flex-col justify-center'>
      {/* 3D Hero Avatar - Only mounted in DOM on desktop to save mobile battery and performance */}
      {isDesktop && (
        <div id="avatar-container" className="absolute inset-0 w-full z-10 pointer-events-auto">
          <AvatarModel />
        </div>
      )}

      <div className='fixed bottom-5 left-[50%] transform -translate-x-1/2 z-50 pointer-events-auto'>
        <DockDemo />
      </div>
      {/* Changed text container to z-20 so it stays above the avatar */}
     <div className='text-white w-full md:w-1/2 pt-2 px-2 sm:px-4 md:px-7 mb-7 relative z-20 pointer-events-none'>
        <p className='text-center md:text-left font-mono my-5 text-slate-600 text-xl leading-relaxed sm:text-2xl md:text-4xl lg:text-5xl font-semibold'>
          {" "}
          <Highlighter action='underline' color='#555e7d'>
            <p className='text-gray-300 z-50 inline-block pointer-events-auto'>Hey there!!</p>
          </Highlighter>
          {" "}
        </p>
        {/* Added responsive min-height to prevent layout shifts when the typewriter effect adds new lines */}
        <div className="flex justify-center md:justify-start gap-2 min-h-[150px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[280px]">
          <p id='intro2' className='intro font-mono text-center md:text-left text-wrap text-xl sm:text-2xl md:text-3xl lg:text-5xl text-slate-500'></p>
        </div>
    </div>
    <div>
    </div>
   </section>
  )
    }

export default CardsComponent