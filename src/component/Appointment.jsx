import React from "react";
import { IoPulseSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

import Doc5 from "./Mages/doc5.png";
import Doc6 from "./Mages/doc6.jpg";
import {motion} from 'framer-motion'
import {fadeIn} from './variants'

export const Appointment = () => {
  return (
    <div>
      <div className="w-[100%] h-[600px] bg-[rgb(236,250,248)] font-sora relative flex justify-center">
        <div className="flex justify-center">
          <div>
            <div className="w-[700px] pt-32 pl-20">
              <div className="flex  text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-6">
                <p>
                  <IoPulseSharp />
                </p>
                <p className="text-center">GET AN APPOINTMENT</p>
              </div>
              <h2 class="text-5xl font-bold text-primary mb-4">
                Widest Network Of Best Healthcare
              </h2>
              <p class="text-muted-foreground mb-4 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim
                metus nec fringilla accumsan consectetur adipiscing elit. Etiam
                eu
              </p>
            </div>
          </div>

          <div>
            <img src={Doc5} alt="" srcset="" className="w-[800px]" />
          </div>
        </div>

        <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
        
        className="w-[80%] h-[400px]  absolute top-[500px] flex rounded-3xl justify-between p-4 font-sora">
          <div className="flex rounded-2xl w-[760] h-[370px] shadow-lg bg-white p-2">
            <div className="w-[350px] h-[350px]  rounded-lg">
              <img src="" alt="" className=" bga" />
            </div>
            <div className="w-[400px] h-[350px]  p-3">
              <div className="flex  text-[rgb(0,0,0)] font-semibold font-sora gap-2 mb-6">
                <p>
                  <FaCalendarAlt className="text-[27px]" />
                </p>
                <p className="text-center text-[27px]">Make An Appointment</p>
              </div>

              <input
                type="text"
                placeholder="Name"
                className="w-[350px] h-[50px] bg-transparent border-2 border-black border-solid mb-4"
              />
              <input
                type="Email"
                placeholder="Email"
                className="w-[350px] h-[50px] bg-transparent border-2 border-black border-solid mb-4 "
              />
              <input
                type="number"
                placeholder="Phone"
                className="w-[350px] h-[50px] bg-transparent border-2 border-black border-solid mb-4 "
              />
              <button className="w-[350px] h-[50px] bg-[rgb(56,198,178)] text-white text-center">
                {" "}
                Book Appointment
              </button>
            </div>
          </div>

          <div className="w-[400px] h-[350px] ">
            <img src="" alt="" className="backg" />
          </div>
        </motion.div>
      </div>
      <div className="w-[100%] h-[350px]">

      </div>
    </div>
  );
};
