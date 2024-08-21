import React from 'react'
import { IoPulseSharp } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa";

import Dc from '../component/Mages/doc.jpg'
import Dc2 from '../component/Mages/doc2.jpg'
import Dc3 from '../component/Mages/doc3.jpg'
import Dc4 from '../component/Mages/doc4.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from './variants'

export const Doctor = () => {
  return (
    <div name='Doctor'>
        <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        
        className='w-[90%] h-[670px]  m-auto mt-7'>
        <div  className='flex  text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-2'>
                <p><IoPulseSharp /></p>
                <p className='text-center'>TESTIMONIALS</p>
            </div>
            <h2 class="text-5xl font-bold text-primary mb-2">Our Best Doctors</h2>

        <div className="container font-sora">
            <div className="card_container flex gap-5">
                <article className='card_article'>
                    <img src={Dc} alt=""  className='card_img' />
                    <div className="card_data">
                        <span className="card_description"> Dr. Daina Ayers</span>
                        <h1 className="card_title">Cardiology</h1>
                        <div className='flex gap-3'> 
                        <a className='card_button' href="#">  <FaFacebook /></a>
                        <a className='card_button' href="#">  <FaTwitter /></a>
                        <a className='card_button' href="#"> <FaWhatsapp /></a>
                        </div>




                    </div>

                </article>



                <article className='card_article'>
                    <img src={Dc2} alt=""  className='card_img' />
                    <div className="card_data">
                    <span className="card_description"> Dr. Daina Ayers</span>
                        <h1 className="card_title">Cardiology</h1>
                        <div className='flex gap-3'> 
                        <a className='card_button' href="#">  <FaFacebook /></a>
                        <a className='card_button' href="#">  <FaTwitter /></a>
                        <a className='card_button' href="#"> <FaWhatsapp /></a>
                        </div>

                    </div>

                </article>


                <article className='card_article'>
                    <img src={Dc3} alt=""  className='card_img' />
                    <div className="card_data">
                    <span className="card_description"> Dr. Daina Ayers</span>
                        <h1 className="card_title">Cardiology</h1>
                        <div className='flex gap-3'> 
                        <a className='card_button' href="#">  <FaFacebook /></a>
                        <a className='card_button' href="#">  <FaTwitter /></a>
                        <a className='card_button' href="#"> <FaWhatsapp /></a>
                        </div>

                    </div>

                </article>


                <article className='card_article'>
                    <img src={Dc4} alt=""  className='card_img' />
                    <div className="card_data">
                    <span className="card_description"> Dr. Daina Ayers</span>
                        <h1 className="card_title">Cardiology</h1>
                        <div className='flex gap-3'> 
                        <a className='card_button' href="#">  <FaFacebook /></a>
                        <a className='card_button' href="#">  <FaTwitter /></a>
                        <a className='card_button' href="#"> <FaWhatsapp /></a>
                        </div>

                    </div>

                </article>
            </div>
            
        </div>

        



        </motion.div>








    </div>
  )
}
