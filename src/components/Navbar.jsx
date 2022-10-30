import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { CgMenuRight } from "react-icons/cg";
import { navLinks } from "../constants";

const Navbar = () => {
     return (
          <div className="ml-auto max-w-max">
               <Popover id="menuMobile">
                    {({ open }) => (
                         <>
                              <Popover.Button
                                   className={`${open ? "" : "text-green-400"} text-3xl lg:hidden`}
                              >
                                   <CgMenuRight
                                        className={`${open ? "" : "text-sky-500"
                                             } text-green-400 transition duration-150 ease-in-out`}
                                        aria-hidden="true"
                                   />
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
                                        <div className=" relative rounded-2xl bg-slate-900/90 ring-1 ring-sky-500/30 backdrop-blur-[6px]">
                                             <div class="max-w-3/4 absolute -top-px left-8 right-10 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                                             <div class="max-w-3/4 absolute -bottom-px left-10 right-8 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                                             <ul className="relative grid gap-8 p-7">
                                                  {navLinks.map((item) => (
                                                       <li
                                                            key={item.name}
                                                            className="-m-2 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-slate-900 hover:ring-1 hover:ring-green-500 hover:ring-opacity-20"
                                                       >
                                                            <span className="bg-gradient-to-br from-green-400 to-sky-500 bg-clip-text text-transparent">
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
               <nav id="menuDesktop" className="hidden lg:flex">
                    <ul className="flex hover:[&>*]:opacity-50">
                         {navLinks.map((item) => (
                              <li>
                                   <a
                                        className="flex content-between items-center p-4 text-lg text-sky-100"
                                        href={item.href}
                                        key={item.name}
                                   >
                                        <span className="text-md mr-[8px] bg-gradient-to-br from-green-400 to-sky-500 bg-clip-text text-transparent">
                                             <item.icon aria-hidden="true" />
                                        </span>
                                        {item.name}
                                   </a>
                              </li>
                         ))}
                    </ul>
               </nav>
          </div>
     );
};

export default Navbar;
