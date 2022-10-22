import React from 'react'
import { BtnIonite } from '.'
import { HeroBackground } from '.'

const Hero = () => {
     return (
          <div className='relative min-h-screen md:flex items-center overflow-hidden'>
               <div className='container relative pt-4 mt-[100px]'>
                    <div className='w-full md:w-[65%] lg:w-[55%] z-30 text-center md:text-left'>
                         <h1 className='font-bold tracking-tight leading-none text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] w-max mx-auto mb-6 md:mx-0 text-slate-900 dark:text-white'>
                              Identity
                              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-500 flex'>Amplified<span className='text-[50%]'>&#8482;</span></span>
                         </h1>
                         <p className='text-slate-900 dark:text-white mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab voluptatibus quam porro? Ut nostrum, adipisci repellat ipsa asperiores veritatis dolor nemo tenetur, distinctio suscipit rerum eius sint quam esse.</p>
                         <BtnIonite>Book A Demo</BtnIonite>
                    </div>
                    <div class="block relative md:absolute top-0 bottom-0 md:left-2/3 lg:left-1/2 z-20 mt-10 md:mt-0 md:flex-center">
                         <div class="relative flex-center rounded-xl md:rounded-2xl bg-[#0A101F]/75 ring-1 ring-white/10 backdrop-blur-sm mx-auto w-10/12 max-w-full md:w-[120vw] lg:w-[90vw] lg:translate-x-[10%] xl:w-[80vw] h-0 py-[25%]">
                              <div class="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                              <div class="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                         </div>
                    </div>
               </div>
               <div className='fixed top-0 right-0 w-1/2 max-w-full z-0 opacity-[3%]'>
                    <HeroBackground />
               </div>
          </div>
     )
}

export default Hero