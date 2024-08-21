import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaUserDoctor } from "react-icons/fa6";
import {motion} from 'framer-motion'
import {fadeIn} from './component/variants'

import "./App.css";

const Home = () => {
  return (
    <div name='Home' className=" z-5">
      <div className="bg-main flex  items-center font-sora text-white pl-[135px] pt-[90px] relative">
        <div className="w-[600px] h-[600px]">
          <motion.p 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.3, duration: 3}}
          
          className=" pb-6">WELCOME TO MEDCARE</motion.p>
          <motion.h2 
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{delay: 4.7, duration: 5}}
          
          className=" text-[60px] font-semibold">
            Taking care of <br /> your health is our <br /> top priority.
          </motion.h2>
          <motion.p 
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{delay: 1, duration: 6}}
          
          className="pt-6 pb-6">
            Being healthy is more than just not getting sick. It entails mental,
            physical, <br />
            and social well-being. It's not just about treatment, it's about
            healing.
          </motion.p>

          <motion.button
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{delay: 1.4, duration: 6}}
          
          
          className="bg-[rgb(64,201,182)] w-[200px] h-[50px] text-white hover:text-[rgb(91,107,105)] rounded-2xl">
            Book An Appointment
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center font-sora pb-[150px]">
        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        
        className="w-[85%] h-[200px] bg-white shadow-md absolute bottom-[-230px] rounded-2xl flex justify-center items-center">
          <div className=" w-[400px] h-[170px] flex flex-col align-middle text-center">
            <p className="pl-[] flex justify-center text-center">
              <FaUserDoctor className=" text-center text-[rgb(64,201,182)] text-[60px]" />
            </p>
            <h3 className="text-[20px] font-medium py-2 text-[rgb(44,90,187)]">
              Qualified Doctors
            </h3>
            <p className="text-[14px] opacity-60">
              Developing whole individuals is <br /> our goal. We have a
              flexible, high- <br /> trust environment.
            </p>
          </div>

          <div className=" w-[400px] h-[170px] border-black border-r-2 border-l-2  flex flex-col align-middle text-center">
            <p className="pl-[] flex justify-center text-center">
              <FaUserDoctor className=" text-center text-[rgb(64,201,182)] text-[60px]" />
            </p>
            <h3 className="text-[20px] font-medium py-2 text-[rgb(44,90,187)]">
              Emergency Helicopter
            </h3>
            <p className="text-[14px] opacity-60">
              The air ambulance feature is now <br />
              available even to middle class <br /> péople, saving lives.
            </p>
          </div>

          <div className=" w-[400px] h-[170px] flex flex-col align-middle text-center">
            <p className="pl-[] flex justify-center text-center">
              <FaUserDoctor className=" text-center text-[rgb(64,201,182)] text-[60px] " />
            </p>
            <h3 className="text-[20px] font-medium py-2 text-[rgb(44,90,187)]">
              Covid - 19
            </h3>
            <p className="text-[14px] opacity-60">
              With rising Covid-19 cases, it is <br /> hard to imagine a
              positive Start to <br /> your date
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
