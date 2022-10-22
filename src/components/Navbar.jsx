import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { navLinks } from '../constants'

const Navbar = () => {

     return (
          <div className='ml-auto grow max-w-max'>
               <Popover id='menuMobile'>
                    {({ open }) => (
                         <>
                              <Popover.Button className={`${open ? '' : 'text-green-400'} text-3xl lg:hidden`}>
                                   <CgMenuRight className={`${open ? '' : 'text-sky-500'} text-green-400 transition duration-150 ease-in-out`} aria-hidden="true"/>
                              </Popover.Button>
                              <Transition
                                   as={Fragment}
                                   enter="transition ease-out duration-200"
                                   enterFrom="opacity-0 translate-y-2"
                                   enterTo="opacity-100 translate-y-0"
                                   leave="transition ease-in duration-150"
                                   leaveFrom="opacity-100 translate-y-0"
                                   leaveTo="opacity-0 translate-y-2"
                              >
                                   <Popover.Panel className="absolute right-4 w-[300px] max-w-[100%] lg:hidden">
                                        <div className=" relative rounded-2xl bg-[#0A101F]/90 ring-1 ring-white/10 backdrop-blur-[6px]">
                                             <div class="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-green-300/0 via-green-300 to-green-300/0"></div>
                                             <div class="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-green-300/0 via-green-300 to-green-300/0"></div>
                                             <ul className="relative grid gap-8 p-7">
                                                  {navLinks.map((item) => (
                                                       <li
                                                            key={item.name}
                                                            className="-m-2 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-slate-900 hover:ring-green-500 hover:ring-1 hover:ring-opacity-20"
                                                       >
                                                            <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-sky-500'>
                                                                 <item.icon aria-hidden="true" />
                                                            </span>
                                                            <a href={item.href} className="ml-4">
                                                                 <span className="text-lg text-sky-100">
                                                                      {item.name}
                                                                 </span>
                                                            </a>
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>
                                   </Popover.Panel>
                              </Transition>
                         </>
                    )}
               </Popover>
               <nav id='menuDesktop' className='hidden lg:block'>
                    <ul className="flex">
                         {navLinks.map((item) => (
                              <li>
                                   <a className="text-sky-100 text-lg flex items-center content-between p-4" href={item.href} key={item.name}>
                                        <span className='mr-[8px] text-md text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-sky-500'>
                                             <item.icon aria-hidden='true' />
                                        </span>
                                        {item.name}
                                   </a>
                              </li>
                         ))}
                    </ul>
               </nav>
          </div>
     )
}

export default Navbar