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
        <section className='w-[95vw] mt-5 px-5 md:px-8'>
            <div className='p-0'>
            <Timeline mode='alternate' style={{color:"grey",borderColor:'white'}} items = {
              [
                {
                color:'#174d78',
                children:<p className='text-slate-600 font-semibold text-wrap font-mono text-start text-xs md:text-lg'>Product Developer at Vegah LLC (Jul 2025 - present) </p>
              },
                {
                color:'#174d78',
                children:<p className='text-slate-600 font-semibold text-wrap font-mono text-start text-xs md:text-lg'>Bachelor's Technology in St.Martin's Engineering College(2025 pass-out)</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-xs md:text-lg'>Ranked among the top 80 people in Google Cloud Computing campaign organized by GDSC.</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-xs md:text-lg'>Frontend Developer Intern at Ada Insys India Pvt Ltd (sep 2024 - nov 2024)</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-xs md:text-lg'>Frontend Developer Intern at BTST Technologies (mar 2024 - may 2024 )</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-xs md:text-lg'>Panel winner of Hacktoberfest conducted by CBIT (07/08/23)</p>
              },
              {
                color:'#174d78',
                children:<p className='text-slate-600 text-wrap font-mono text-start text-xs md:text-lg'>Worked as a freelance web developer and managed to provide services to multiple clients. </p>
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