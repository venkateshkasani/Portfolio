import React from 'react'
import { Timeline,ConfigProvider } from 'antd'
const TimelineComp:React.FC = () => {
  return (
    (
        <ConfigProvider
        theme={
          {
            components:{
              Timeline:{
                tailColor:'#25313b',
                dotBg:'#e6edf7'
              }
            }
          }
        }
        >
        <section className='aboutSection w-[95vw] mt-5'>
            <div className='p-2'>
            <Timeline mode='left' style={{color:"grey",borderColor:'white'}} items = {
              [{
                color:'green',
                children:<p className='text-slate-600 font-semibold text-wrap font-mono text-start text-sm md:text-lg'>Bachelor's Technology in St.Martin's Engineering College(2025 pass-out)</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Ranked among the top 80 people in Google Cloud Computing campaign organized by GDSC.</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Panel winners of Hacktoberfest conducted by CBIT (07/08/23)</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Started MERN Stack along with Nextjs and animations using GSAP.</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Developed a model for paralyzed or physically challenged people to ease their daily processes.<br />
                Leveraged C programming for creating the functionality of the device which can be remotely operated with remote devices.</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 font-semibold text-wrap font-mono text-start text-sm md:text-lg'>Diploma of Education in VNR VJIET</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 font-semibold text-wrap font-mono text-start text-sm md:text-lg'>Passed out SSC with a CGPA of 9.8/10</p>
              }
            ]
            } className = '' />
            </div>
          </section>
        </ConfigProvider>
        )
  )
}

export default TimelineComp