import React from 'react'
import { IoPulseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Doc8 from "./Mages/doc8.jpg";
import Doc9 from "./Mages/doc9.jpg";
import Doc10 from "./Mages/doc10.jpg";
import {motion} from 'framer-motion'
import {fadeIn} from './variants'


export const Blog = () => {
  return (
    <motion.div
    variants={fadeIn('up', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    
    name='Blog' >
        <div  className='flex text-center  justify-center text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-1 mt-10'>
                <p><IoPulseSharp  className='text-[18px]'/></p>
                <p className='text-center text-[18px]'>OUR BLOGS</p>
            </div>
            {/* <h2 class="text-5xl font-bold text-primary mb-6 text-center">  Let's See How We Work</h2> */}


        <div className="container mx-auto p-6 font-sora">
          <h2 className="text-5xl font-bold text-center mb-6">Latest Blogs & Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden h-[600px] w-[400px]">
              <img src={Doc8} alt="Blog Image 1" className="w-full h-[300px] object-cover" />
              <div className="p-4">
                <p className="text-muted-foreground pt-4 pb-4 border-b-2">
                  📝 Jeffrey Davis <span className="text-muted">| 24 Jan 2023</span>
                </p>
                <h3 className="text-[25px] font-bold pt-4 pb-4 ">New Technology Make for Pulmonary Operation</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex items-center pt-4'>
                <a href="#" className=" hover:text-[rgb(56,198,178)] pr-2">
                  View Details 
                </a>
                <FaArrowRightLong className='' />
                </div>
               
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden h-[600px] w-[400px]">
              <img src={Doc9} alt="Blog Image 2" className="w-full h-[300px] object-cover" />
              <div className="p-4">
                <p className="text-muted-foreground pt-4 pb-4 border-b-2">
                  📝 Allen Hartzler <span className="text-muted">| 22 Jan 2023</span>
                </p>
                <h3 className="text-[25px] font-bold pt-4 pb-4 ">To Be Good Health Take Doctor Suggestions</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex items-center pt-4'>
                <a href="#" className=" hover:text-[rgb(56,198,178)] pr-2">
                  View Details 
                </a>
                <FaArrowRightLong className='' />
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden h-[600px] w-[400px]">
              <img src={Doc10} alt="Blog Image 3" className="w-full h-[300px] object-cover" />
              <div className="p-4">
                <p className="text-muted-foreground pt-4 pb-4 border-b-2">
                  📝 Diana Ayers <span className="text-muted">| 20 Jan 2023</span>
                </p>
                <h3 className="text-[25px] font-bold pt-4 pb-4 ">A Guide to Maintaining Healthy Bones</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex items-center pt-4'>
                <a href="#" className=" hover:text-[rgb(56,198,178)] pr-2">
                  View Details 
                </a>
                <FaArrowRightLong className='' />
                </div>
              </div>
            </div>
          </div>
         
          <div className='flex justify-center pt-16'>
          <a href="">
          <button className=' bg-[rgb(56,198,178)] w-[150px] h-[50px] text-center hover:text-white rounded-lg '> More Articles</button>
          </a>
          </div>
     
        </div>









    </motion.div>
  )
}
