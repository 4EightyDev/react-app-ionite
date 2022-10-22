import React from 'react'
import { Ionite, Navbar } from './index'

const Header = () => {
     return (
          <header className='z-50 bg-slate-900/80 backdrop-blur-[6px] fixed w-full left-0 right-0'>
               <div className='container flex-center h-[100px]'>
                    <Ionite />
                    <Navbar />
               </div>
          </header>
     )
}

export default Header