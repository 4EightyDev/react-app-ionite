import React from "react";
import { BtnIonite } from ".";
import { HeroBackground } from ".";

const Hero = () => {
     return (
          <div className="relative min-h-screen items-center overflow-hidden md:flex pb-6">
               <div className="container relative mt-[100px] pt-4">
                    <div className="z-30 w-full p-4 text-center md:w-[65%] md:text-left lg:w-[55%]">
                         <h1 className="mx-auto mb-6 w-max text-[4rem] sm:text-[5rem] md:text-[4rem] lg:text-[5rem] 2xl:text-[7rem] font-bold leading-none tracking-tight md:mx-0">
                              <span className="bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent">
                                   Identity
                              </span>
                              <span className="flex bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
                                   Amplified<span className="text-[50%]">&#8482;</span>
                              </span>
                         </h1>
                         <p className="mb-12 text-slate-900 dark:text-white sm:text-xl lg:text-2xl md:max-w-[60vh] xl:max-w-none">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
                              est perferendis.
                         </p>
                         <BtnIonite text="Get Started" />
                    </div>
                    <div class="md:flex-center relative top-0 bottom-0 z-20 mt-10 block md:absolute md:left-[60%] lg:left-[55%] md:mt-0">
                         <div class="flex-center relative mx-auto aspect-video w-full max-w-lg sm:w-screen md:max-w-4xl xl:max-w-5xl bg-[#0A101F]/70 ring-1 ring-sky-500/30 backdrop-blur-sm rounded-xl md:rounded-2xl">
                              <div class="max-w-3/4 absolute -top-px left-8 right-10 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                              <div class="max-w-3/4 absolute -bottom-px left-10 right-8 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                              <div id="addressBar" className="bg-sky-500/[3%] w-[calc(100%-2px)] absolute top-px rounded-xl rounded-b-none rounded-l-none flex items-center justify-center py-2">
                                   <div className="flex items-center justify-start [&>*]:mx-1 px-3 absolute left-0">
                                        <span className="w-2 md:w-3 aspect-square rounded-full bg-[#f55f57]"></span>
                                        <span className="w-2 md:w-3 aspect-square rounded-full bg-[#f9bc2f]"></span>
                                        <span className="w-2 md:w-3  aspect-square rounded-full bg-[#3fc940]"></span>
                                   </div>
                                   <div className="max-w-max sm:max-w-none w-7/12 bg-sky-300/[10%] rounded-full">
                                        <span className="text-sky-300 font-mono text-[.6rem] sm:text-[.65rem] md:text-[.8rem] lg:text-[1rem] flex-center lg:justify-center py-1 px-2 sm:px-4">https://app.ionite.com</span>
                                   </div>
                                   <div></div>
                              </div>
                              <div id="sidebar" className="hidden bg-white/[.75%] border border-sky-500/20 absolute bottom-2 left-2 w-[calc(20%)] h-[calc(100%-3.5em)] md:h-[calc(100%-4em)] rounded-md">
                                   <div> </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="fixed top-0 right-0 z-0 w-1/2 max-w-full opacity-[3%]">
                    <HeroBackground />
               </div>
          </div>
     );
};

export default Hero;
