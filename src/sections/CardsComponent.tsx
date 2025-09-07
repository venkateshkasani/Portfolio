import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { DockDemo } from './Dock';
import { Highlighter } from '@/components/magicui/highlighter';

// Must register the plugin before using.
gsap.registerPlugin(TextPlugin)
export const CardsTimeline = () => {
  const intro:string = "I'm Venkatesh. A fullstack developer transforming visionary ideas into reality."
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
  
  return (
    <section className='md:px-0 sm:pl-2 pl-0 mx-4 relative'>
      <div className='fixed bottom-5 left-[50%] transform -translate-x-1/2 z-50'>
        <DockDemo />
      </div>
     <div className='text-white w-full pt-2 px-2 sm:px-4 md:px-7 mb-7'>
        <p className='text-center md:text-center font-mono my-5 text-slate-600 text-xl leading-relaxed sm:text-2xl md:text-4xl lg:text-5xl font-semibold'>
          {" "}
          <Highlighter action='underline' color='#555e7d'>
            <p className='text-gray-300 z-50'>Hey there!!</p>
          </Highlighter>
          {" "}
        </p>
        <div className="flex justify-center gap-2">
          <img className='rounded-full hidden md:inline w-10 h-10 mt-2 md:w-30 md:h-30' src='/img/profile.jpg' />
          <p id='intro2' className='intro font-mono md:text-center text-wrap text-xl sm:text-2xl md:text-3xl lg:text-5xl text-slate-500'></p>
        </div>
    </div>
    <div>
    </div>
   </section>
  )
    }

export default CardsComponent