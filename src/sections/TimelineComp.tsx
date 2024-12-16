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
            <Timeline mode='alternate' style={{color:"grey",borderColor:'white'}} items = {
              [{
                color:'#174d78',
                children:<p className='text-slate-600 font-semibold text-wrap font-mono text-start text-sm md:text-lg'>Bachelor's Technology in St.Martin's Engineering College(2025 pass-out)</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Ranked among the top 80 people in Google Cloud Computing campaign organized by GDSC.</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Panel winner of Hacktoberfest conducted by CBIT (07/08/23)</p>
              },
              {
                color:'#20d666',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Frontend Developer Intern at Ada Insys India Pvt Ltd (sep 2024 - nov 2024)</p>
              },
              {
                color:'#20d666',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Software Developer Intern at BTST Technologies (mar 2024 - may 2024 )</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Sofware Test Automation Internship using Katalon Studio - SmartInternz</p>
              },
              {
                color:'#20d666',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Worked as a freelance web developer and managed multiple long-term client contracts (12-2022 to 11-2023) </p>
              },

              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Started MERN Stack along with Nextjs and animations using GSAP.</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-sm md:text-lg'>Developed a model for physically challenged people to streamline their process of communication</p>
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