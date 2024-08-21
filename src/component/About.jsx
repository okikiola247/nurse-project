import React from 'react'
import { IoPulseSharp } from "react-icons/io5";
import {motion} from 'framer-motion'
import {fadeIn} from './variants'


export const About = () => {
  return (
    <div>
        <div>

            <div name='About' className="w-[100%] h-[1000px] flex justify-between px-20 items-center font-sora">
                <motion.div 
                                 variants={fadeIn('right', 0.3)}
                                 initial='hidden'
                                 whileInView={'show'}
                                 viewport={{once: false, amount: 0.4}}
                
                className='w-[700px] h-[650px]'>

                <section class="p-8 bg-background text-foreground font-sora">

  <h2 class="text-xl font-semibold mb-4 text-[rgb(56,198,178)]"> <span><IoPulseSharp /></span> ABOUT US</h2>
  <h1 class="text-5xl font-bold mb-4"> Welcome To Okiki Central Hospital</h1>
  <p class="mb-6 text-[18px]" >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
    interdum tellus elit sed risus.
  </p>
  <ul class="list-disc list-inside mb-6 font-semibold leading-9">
    <li> 15+ Years of excellence</li>
    <li>A Multispecialty hospital</li>
    <li>24/7 Hour Medical Service</li>
    <li>A team of professionals</li>
  </ul>
  <button class="bg-[rgb(56,198,178)] text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80">Book An Appointment</button>
</section>

                </motion.div>


                <motion.div 
                                 variants={fadeIn('left', 0.3)}
                                 initial='hidden'
                                 whileInView={'show'}
                                 viewport={{once: false, amount: 0.4}}
                
                className='w-[550px] h-[650px]  abt-img '>
                    <img src="" alt="" />

                </motion.div>

            </div>

            <motion.div 
                 variants={fadeIn('up', 0.3)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.3}}
            class="bg-[rgb(30,93,188)] text-white py-24 font-sora">
  <div class="container mx-auto flex justify-around">
    <div class="text-center">
      <h2 class="text-5xl font-bold">35+</h2>
      <p class="text-lg">National Awards</p>
    </div>
    <div class="text-center">
      <h2 class="text-5xl font-bold">125+</h2>
      <p class="text-lg">Expert Doctors</p>
    </div>
    <div class="text-center">
      <h2 class="text-5xl font-bold">5k+</h2>
      <p class="text-lg">Satisfied Patients</p>
    </div>
    <div class="text-center">
      <h2 class="text-5xl font-bold">8k+</h2>
      <p class="text-lg">Operation Success</p>
    </div>
  </div>
</motion.div>
        </div>
        



    </div>
  )
}
