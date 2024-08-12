import { useState } from 'react'
import React from 'react'
import { WechatOutlined } from '@ant-design/icons'
import EmailForm from './EmailForm'

const Floater:React.FC = () => {
  const [isChatOpen,setIsChatOpen] = useState<boolean>(false);
  return (
    <div className="fixed right-0 bottom-0 m-4 z-10 flex flex-col items-end">
      {isChatOpen && 
        <EmailForm />
      }
      <div className="bg-sky-400 py-2 px-2.5 rounded-full w-[51px] h-[50px] cursor-pointer flex items-center justify-center" onClick={()=>setIsChatOpen(!isChatOpen)}>
        {isChatOpen ? 
        <span className='text-3xl px-2 py-2 transition-transform transform duration-300'>x</span> : <WechatOutlined className='text-xl sm:text-3xl' />
       }
      </div>
    </div>
  )
}

export default Floater
