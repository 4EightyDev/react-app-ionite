const BtnAmplified = (props) => {
     return (
          <button className="rounded-full shadow-xl shadow-slate-900 transition-all hover:rotate-1 hover:scale-105">
               <div class="flex rounded-full bg-gradient-to-br from-yellow-500 via-orange-600 to-yellow-500 p-px">
                    <div class="flex-center relative min-w-[200px] rounded-full bg-gradient-to-tr from-orange-600 via-yellow-500 to-orange-600 px-5 py-3 text-lg">
                         <span className="text-lg font-extrabold leading-tight text-slate-900">
                              {props.text}
                         </span>
                         <div class="max-w-3/4 absolute -top-px left-8 right-10 h-[2px] bg-gradient-to-r from-yellow-200/0 via-yellow-400 to-yellow-400/0"></div>
                         <div class="max-w-3/4 absolute -bottom-px right-8 h-[2px] bg-gradient-to-r from-yellow-200/0 via-yellow-400 to-yellow-400/0 left-10"></div>
                    </div>
               </div>
          </button>
     );
};
export default BtnAmplified