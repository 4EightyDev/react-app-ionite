import React from 'react'

const BtnAmplified = (props) => {
     return (
          <button className='rounded-full shadow-xl shadow-slate-900 hover:scale-105 hover:rotate-1 transition-all'>
               <div class="flex rounded-full bg-gradient-to-br from-yellow-500 via-orange-600 to-yellow-500 p-px">
                    <div class="flex-center rounded-full px-5 py-3 min-w-[200px] bg-gradient-to-tr from-orange-600 via-yellow-500 to-orange-600 text-lg relative">
                         <span className='text-lg font-extrabold text-slate-900 leading-tight'>
                              {props.text}
                         </span>
                         <div class="absolute -top-px left-8 right-10 max-w-3/4 h-[2px] bg-gradient-to-r from-yellow-200/0 via-yellow-400 to-yellow-400/0"></div>
                         <div class="absolute -bottom-px left-10 right-8 max-w-3/4 h-[2px] bg-gradient-to-r from-yellow-200/0 via-yellow-400 to-yellow-400/0"></div>
                    </div>
               </div>
          </button>
     )
}

export default BtnAmplified