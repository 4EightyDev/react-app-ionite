import React from "react";
import { useState } from "react";

const Nav = (props) => {
     return (
          <nav className="flex-between">
               <ul className="flex-center">
                    <li>
                         <a href="{props.href}" title="{props.title}">
                              {props.title}
                         </a>
                    </li>
               </ul>
          </nav>
     );
};

export default Nav;
