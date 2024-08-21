import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from './variants'




export const Footer = () => {
  return (
    <div>
        <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
        
        className='w-[100%] h-[300px] bg-[rgb(30,93,188)] flex justify-center font-sora mt-28'>
            <div className='w-[600px] h-[300px] text-white flex flex-col align-middle justify-center'>
                <p className='text-[23px] mb-4'>Subscribe Newsletter</p>
                <p className='text-[40px]'>Get the latest update by Subcribing to our newsletter</p>

                
            </div>
            <div className='w-[600px] h-[300px] flex justify-center align-middle items-center'>
                <input type="email" className='w-[400px] h-[50px]' placeholder='your email address...'/>
                <div className='flex justify-center'>
          <a href="">
          <button className=' bg-[rgb(56,198,178)] w-[150px] h-[50px] text-center hover:text-white'>Subscribe</button>
          </a>
          </div>
            </div>
          
        </motion.div>






        <div className='w-[100%] h-[400px] bg-[rgb(30,34,69)] text-white flex items-center justify-center'>
          <div className='flex w-[80%] font-sora'>
  

               <div class="w-[400px] h-[300px]">
      <h2 class="text-[30px] font-bold mb-5">Okikiola</h2>
      <p class="text-muted-foreground text-[15px] mb-4">It was popularised in the 1960s with the release <br /> of  Letraset sheets containing Lorem Ipsum passages.</p>
      <p class="flex items-center text-[15px]">
        <span class="mr-2">📧</span>
        <a href="mailto:info@websitename.com" class="text-primary hover:underline">info@websitename.com</a>
      </p>
      <p class="flex items-center text-[15px]">
        <span class="mr-2">📍</span>
        <span>1378 Whitetail Frisco, 75034</span>
      </p>
    </div>

               <div class="w-[200px] h-[300px] ">
      <h3 class="text-[20px] font-semibold mb-5">Quick Links</h3>
      <ul class="list-none text-[15px] leading-10 ">
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">About Us</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Our Services</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Testimonials</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Our Blogs</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Contact Us</a></li>
      </ul>
    </div>

    <div class="w-[300px] h-[300px] ">
      <h3 class="text-[25px] font-semibold mb-5">Our Services</h3>
      <ul class="list-none text-[15px] leading-10">
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Terms of Use</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Privacy Policy</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Contact Support</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-[rgb(56,198,178)]">Careers</a></li>
      </ul>
    </div>


    <div class="w-[300px] h-[300px] ">
      <h3 class="text-[20px] font-semibold mb-5">Book An Appointment</h3>
      <p class="text-muted-foreground text-[15px] mb-5">The doctorate staff members are <br /> well trained professionals.</p>
      <p class="flex items-center w-[250px] h-10 justify-center bg-blue-400 border-2 border-solid border-black">
        <span class="mr-2">📞</span>
        <span>Call: +012 345 6789</span>
      </p>
    </div>

               

               
          </div>

         </div>





<div className='w-[100%] h-[100px] bg-[rgb(30,34,69)] text-white flex justify-center'>

<div class="  flex justify-between items-center w-[80%] h-[100px] border-t-2 border-solid border-zinc-400">
    <p class="text-sm">All Rights Reserved @ Company 2023 | Terms & Conditions | Privacy Policy </p>
    
    <div class="flex space-x-2">
      <a href="#" class="bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80">
      <FaFacebook />
      </a>
      <a href="#" class="bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80">
      <AiFillTwitterCircle />

      </a>
      <a href="#" class="bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80">
      <FaInstagram />

      </a>
    </div>
  </div>
</div>

















    </div>
  )
}
