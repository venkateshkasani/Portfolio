import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Resume = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMailSent,setIsMailSent] = useState(false);
  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) { // Check if form.current is not null
      emailjs
        .sendForm('contact_service', 'contact_form', form.current, {
          publicKey: '79p3_RZFq-UrX-UjU',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsMailSent(true);
          },
          (error: { text: string }) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.log('Form ref is null');
    }
  };
  return (
    <div className='bg-gradient-to-r from-sky-100  to-sky-400 rounded m-2 overflow-clip w-[70vw] sm:w-[22vw]'>
    {isMailSent ? 
    <div className='text-stone-700 py-4'>
      Thanks for responding : )
    </div>
     : 
    <form className='p-2' ref={form} onSubmit={sendEmail} >
    <span id='headingsm' style={{letterSpacing:'1px'}} className='font-bold font-sans'>Shoot a message</span> 
    <div className='flex flex-row items-center justify-between mt-4'>
      <label className='text-black text-xs sm:text-md p-1' htmlFor="name">Name:</label>
      <input name='name' className='text-gray-700 w-[75%] bg-transparent my-2 mx-2  outline-none border-b border-gray-600' type='text' />
      </div>
      <div className='flex flex-row items-center justify-between p-1'>
      <label className='text-black text-xs sm:text-md' htmlFor="email">Email: </label>
      <input name='email' className='text-black w-[75%] text-gray-700 bg-transparent mx-2 my-2 outline-none border-b border-gray-600' type='text' />
      </div>
      <div className='flex flex-row items-start justify-between p-1'>
      <label className='text-black text-xs sm:text-md' htmlFor="message">Message: </label>
      <textarea name='message' className='text-black w-[75%] text-gray-700 bg-transparent mx-2 outline-none border-b border-gray-600'/>
      </div>
      <button className='bg-blue-700 text-sm bg-gradient-to-r from-slate-800 to-sky-900 my-2 hover:outline-none' type='submit' >Send</button>
      </form>
     }
    </div>
  )
}

export default Resume