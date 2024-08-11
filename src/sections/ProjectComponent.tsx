import React from 'react'
interface ProjectData {
  title:string,
  path:string,
  link:string
}
const ProjectComponent:React.FC<{data :ProjectData}>= ({data}) => {
  return (
    <div className='projectParent w-full sm:w-1/4 my-5'>
      <a className='no-underline' target='_blank' href={data.link}>
      <div className='projectCard relative border border-black'>
        <div className='opacity-1 hover:opacity-30 hover:cursor-pointer transition-all duration-500'>
        <img src={data.path} width='full' height='full' /> 
        <div className='projectText absolute top-[50%] left-[50%] text-white opacity-0 hover:opacity-100 transition-all flex items-center justify-center'>
            {data.title}
        </div>
        </div>
    </div>
    </a>
    </div>
  )
}

export default ProjectComponent
