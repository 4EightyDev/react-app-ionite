import React, { forwardRef } from 'react'

const BtnPrimary = forwardRef(
     (
          {
               children,
               type = 'button',
               className,
               ...props
          }, ref
     ) => (
          <button className='shadow-xl shadow-black/30 rounded-full'
               ref={ref}
               type={type}
               {...props}
          >
               <div class="flex rounded-full bg-gradient-to-r from-sky-500/20 via-sky-500 to-sky-500/30 p-px">
                    <div class="flex-center rounded-full px-5 py-3 min-w-[200px] bg-slate-900/80 text-lg font-bold text-sky-200 leading-tight relative">
                         {children}
                         <div class="absolute -top-px left-8 right-10 margin-auto max-w-[50%] h-px bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                         <div class="absolute -bottom-px left-10 right-8 h-px bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                    </div>
               </div>
          </button>
     ));

export default BtnPrimary