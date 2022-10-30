import React from "react";
import { Ionite, Navbar } from "./index";
import BtnAmplified from "./BtnAmplified";
import { useScrollPosition } from "../hooks/useScrollPosition";

function classNames(...classes) {
     return classes.filter(Boolean).join(' ');
}

const Header = () => {

     const scrollPosition = useScrollPosition()

     return (
          <header className={classNames(scrollPosition > 0 ? 'bg-slate-900/80' : 'bg-slate-900/0', 'fixed left-0 right-0 z-50 w-full backdrop-blur-[6px] duration-500 transition-all')}>
               <div className="flex-center container h-[100px]">
                    <Ionite />
                    <Navbar />
                    <div className="hidden scale-75 lg:block">
                         <BtnAmplified text="Request A Demo" />
                    </div>
               </div>
          </header>
     );
};

export default Header;
