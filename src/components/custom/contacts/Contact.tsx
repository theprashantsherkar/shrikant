import React from 'react'
import {Instagram, Twitter, Github, Mail} from 'lucide-react'
function Contact() {
  return (
      <div className='flex items-start justify-center gap-5  p-4 '>
          <div ><Instagram className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 transition-all' /></div>
          <div><Twitter className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 transition-all' /></div>
          <div><Github className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 transition-all' /></div>
          <div><Mail className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 transition-all' /></div>
    </div>
  )
}

export default Contact