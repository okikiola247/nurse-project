import React from 'react'
import { IoPulseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import {motion} from 'framer-motion'
import {fadeIn} from './variants'



export const Service = () => {
  return (
    <div name='Service'>
        
        <motion.div
                         variants={fadeIn('up', 0.3)}
                         initial='hidden'
                         whileInView={'show'}
                         viewport={{once: false, amount: 0.2}}
        
                          className='w-[80%] mx-auto font-sora mt-[80px] mb-28'>
       
        <div  class="containers mx-auto px-4 py-8">
        <div className='flex text-center  justify-center text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-6 sm:text-blue-700' >
                <p><IoPulseSharp /></p>
                <p className='text-center'>MEDICAL SERVICE</p>
            </div>
  <h2 class="text-5xl font-bold text-center mb-10">Find Out More About <br /> Our Services</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-card p-6 rounded-lg shadow-md text-center">
      <img aria-hidden="true" alt="Cardiology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=❤️" class="mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-primary">Cardiology</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.</p>
     
    </div>
    <div class="bg-card p-6 rounded-lg shadow-md text-center">
      <img aria-hidden="true" alt="Neurology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🧠" class="mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-primary">Neurology</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.</p>
      <a href="#" class="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded">Read More →</a>
    </div>
    <div class="bg-card p-6 rounded-lg shadow-md text-center">
      <img aria-hidden="true" alt="Urology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🚽" class="mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-primary">Urology</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.</p>
    
    </div>
    <div class="bg-card p-6 rounded-lg shadow-md text-center">
      <img aria-hidden="true" alt="Pulmonary Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🫁" class="mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-primary">Pulmonary</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.</p>
      
    </div>
    <div class="bg-card p-6 rounded-lg shadow-md text-center">
      <img aria-hidden="true" alt="Radiology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🩻" class="mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-primary">Radiology</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.</p>
     
    </div>
    <div class="bg-card p-6 rounded-lg shadow-md text-center" >
      <img aria-hidden="true" alt="Hypnotherapy Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🧘" class="mx-auto mb-4" />
      <h3 class="text-lg font-semibold text-primary">Hypnotherapy</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.</p>
      
    </div>
  </div>
</div>
        </motion.div>









        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        
        class="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row bg-[rgb(236,249,247)] justify-center h-[550px] items-center font-sora" >
  <div class=" w-[600px]">
  <div className='flex  text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-6'>
                <p><IoPulseSharp /></p>
                <p className='text-center'>TESTIMONIALS</p>
            </div>
    <h2 class="text-5xl font-bold text-primary mb-2">Great Patient Stories</h2>
    <p class="text-muted-foreground mb-4 text-[18px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim metus nec fringilla accumsan.
    </p>
    <div class="flex items-center space-x-2">
      
    </div>
  </div>
  <div class=" swipe " >

  <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='flex mt-6 md:mt-0 md:ml-6 w-[700px] h-[300px]'>  
        <blockquote class="bg-card p-4 rounded-lg shadow-md h-[300px] ">
      <p class="text-muted-foreground mb-2 font-sora">
        Nulla sit amet finibus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra sapien a tincidunt interdum. Nam sem risus, posuere sed sapien non, ultrices auctor nunc. Nulla sit amet finibus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra sapien a tincidunt interdum. Nam sem risus, posuere sed sapien non, ultrices auctor nunc.
       
      </p>
      <footer class="flex items-center font-sora">
        <img src="https://placehold.co/50x50" alt="Kevin B. Ibarra" class="rounded-full mr-2" />
        <div>
          <cite class="font-semibold">Kevin B. Ibarra</cite>
          <span class="text-muted-foreground">Patient</span>
        </div>
      </footer>
    </blockquote>
    

          
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  






  </div>
</motion.div>


                           {/* our WORK PROCESS */}





<motion.div 
variants={fadeIn('up', 0.3)}
initial='hidden'
whileInView={'show'}
viewport={{once: false, amount: 0.2}}

className=' mt-[100px] flex flex-col justify-center font-sora items-center'>
<div className='flex text-center  justify-center text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-6'>
                <p><IoPulseSharp /></p>
                <p className='text-center'>OUR WORK PROCESS</p>
            </div>
            <h2 class="text-5xl font-bold text-primary mb-6 text-center">  Let's See How We Work</h2>
    <p class="text-muted-foreground mb-4 text-[16px] text-center opacity-65 ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, <br /> mattis tellus. Sed dignissim metus nec fringilla accumsan.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mt-10 ">
    <div class="bg-card p-6 rounded-lg  text-center">
      <img aria-hidden="true" alt="Cardiology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=❤️" class="mx-auto mb-4" />
      <h3 class="text-[23px] font-bold text-[rgb(48,94,188)] mb-4">Seeing Patients</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat .</p>
     
    </div>
    <div class="bg-card p-6 rounded-lg  text-center">
      <img aria-hidden="true" alt="Neurology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🧠" class="mx-auto mb-4" />
      <h3 class="text-[23px] font-bold text-[rgb(48,94,188)] mb-4">Making a Diagnosis</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat.</p>
      
    </div>
    <div class="bg-card p-6 rounded-lg  text-center">
      <img aria-hidden="true" alt="Urology Icon" src="https://openui.fly.dev/openui/100x100.svg?text=🚽" class="mx-auto mb-4" />
      <h3 class="text-[23px] font-bold text-[rgb(48,94,188)] mb-4">Developing a Treatment</h3>
      <p class="text-muted-foreground mb-4">Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat .</p>
      </div>
    
    </div>




</motion.div>




                               {/* our facilities */}


                               
  <div>
    
    <div className='w-[100%] h-[1100px]  flex justify-center font-sora bg-[rgb(245,252,251)] mt-9  mb-20'>
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
       className='w-[550px] h-[1100px] flex items-center'>
        <div>
        <div className='flex  text-[rgb(56,198,178)] font-semibold font-sora gap-2 mb-6'>
                <p><IoPulseSharp /></p>
                <p className='text-center'>TESTIMONIALS</p>
            </div>
    <h2 class="text-5xl font-bold text-primary mb-4">Facilities That We Provide</h2>
    <p class="text-muted-foreground mb-4 text-[18px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim metus nec fringilla accumsan.
    </p>
    <button class="bg-[rgb(255,255,255)] text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80  border-[rgb(56,198,178)] border-solid border-2">Veiw all</button>
        </div>

      </motion.div
      >



      <div className='w-[650px] h-[1100px] flex justify-evenly' >
        <div className='w-[300px] h-[1100px] flex flex-col  justify-center gap-9'>
          <div className='w-[300px] h-[300px] bg-red-300 rounded-lg'>

          </div>
          <div className='w-[300px] h-[300px] bg-red-500 rounded-lg'>

          </div>

        </div>
        <div className='w-[300px] h-[1100px] flex flex-col  justify-center gap-9'>

                  <div className='w-[300px] h-[300px] bg-red-300 rounded-lg'>

          </div>
          <div className='w-[300px] h-[300px] bg-red-500 rounded-lg'>

          </div>
          <div className='w-[300px] h-[300px] bg-red-300 rounded-lg'>

          </div>

        </div>

      </div>



    </div>
    
    
    
    
    </div>                               








{/* <blockquote class="bg-card p-4 rounded-lg shadow-md">
      <p class="text-muted-foreground mb-2">
        Nulla sit amet finibus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra sapien a tincidunt interdum. Nam sem risus, posuere sed sapien non, ultrices auctor nunc.
        Proin mollis finibus aliquet lorem ipsum.
      </p>
      <footer class="flex items-center">
        <img src="https://placehold.co/50x50" alt="Kevin B. Ibarra" class="rounded-full mr-2" />
        <div>
          <cite class="font-semibold">Kevin B. Ibarra</cite>
          <span class="text-muted-foreground">Patient</span>
        </div>
      </footer>
    </blockquote> */}


    </div>
  )
}
