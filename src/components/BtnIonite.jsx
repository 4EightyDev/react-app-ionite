import React from 'react'

const BtnPrimary = (props) => {
     return (
          <button className='rounded-full shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/10 hover:scale-105 transition-all duration-400'>
               <div class="flex rounded-full bg-gradient-to-r from-sky-500/20 via-green-300 to-sky-500/20 p-px">
                    <div class="flex-center rounded-full px-5 py-3 min-w-[200px] bg-slate-900 relative">
                         <span className='text-lg font-bold text-sky-200 leading-tight'>
                              {props.text}
                         </span>
                         <div class="absolute -top-px left-8 right-10 max-w-3/4 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                         <div class="absolute -bottom-px left-10 right-8 max-w-3/4 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                    </div>
               </div>
          </button>
     )
}

export default BtnPrimary