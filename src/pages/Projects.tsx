import { Timeline } from 'antd'
import React from 'react'

const Projects:React.FC = () => {
  return (
    <section className='aboutSection' >
      <div className='p-2'>
      <Timeline style={{color:"grey"}} items = {
        [{
          color:'grey',
          children:<p className='text-slate-200 font-mono text-start'>Bachelor's Technology in St.Martin's Engineering College</p>
        },
        {
          color:'grey',
          children:<p className='text-slate-200 font-mono text-start'>Diploma of Education in VNR VJIET</p>
        },
        {
          color:'grey',
          children:<p className='text-slate-200 font-mono text-start'>Passed out SSC with a CGPA of 9.8 out of 10</p>
        },
        {
          color:'grey',
          children:<p className='text-slate-200 font-mono text-start'>Bachelor's Technology in St.Martin's Engineering College</p>
        }
      ]
      } className = '' />
      </div>
    </section>
  )
}

export default Projects