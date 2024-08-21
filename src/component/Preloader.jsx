import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animation'
import '../component/Preloader.css'

export const Preloader = () => {
  useEffect(()=>{
      preLoaderAnim()
  },[])
  return (
    <div className='preloader'>
      <div className='texts-container'> 
      <span>Developer</span>
      <span>Curator</span>
      <span>Vibe</span>
      
      
      </div>
    </div>
  )
}
