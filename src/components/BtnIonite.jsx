const BtnPrimary = (props) => {
     return (
          <button className="duration-400 rounded-full shadow-lg shadow-sky-500/10 transition-all hover:scale-105 hover:shadow-xl hover:shadow-sky-500/10">
               <div class="flex rounded-full bg-gradient-to-r from-sky-500/20 via-green-300 to-sky-500/20 p-px">
                    <div class="flex-center relative min-w-[200px] rounded-full bg-slate-900 px-5 py-3">
                         <span className="text-lg font-bold leading-tight text-sky-200">
                              {props.text}
                         </span>
                         <div class="max-w-3/4 absolute -top-px left-8 right-10 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                         <div class="max-w-3/4 absolute -bottom-px left-10 right-8 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                    </div>
               </div>
          </button>
     );
};

export default BtnPrimary
