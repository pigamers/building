import React, { useState } from 'react'
import {IoLogoJavascript} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = (props) => {
    let Links =[
      {name:"Projects",href:"/"},
      {name:"Images",href:"/"},
      {name:"Products & BIM",href:"/"},
      {name:"Professionals",href:"/"},
      {name:"News",href:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed z-50 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-3 md:px-10 px-5'>
      <div className='font-bold text-2xl cursor-pointer flex text-gray-800'>
        <span className='text-3xl mr-1 pt-2'>
        <IoLogoJavascript size={35} />
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <GiHamburgerMenu name={open ? 'close':'menu'} />
      </div>

      <ul className={`md:flex py-5 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((href)=>(
            <li key={href.name} className='md:ml-8 font-semibold text-xl md:my-0 my-7 px-2'>
              <a href={href.href} className='text-gray-800 hover:text-gray-400 duration-500'>{href.name}</a>
            </li>
          ))
        }
        <div className='pb-4 pl-3 md:pb-1 space-x-5'>
          <button type="button" class="px-9 py-1 text-lg font-medium border-2 border-[#8e0000] rounded-md text-[#8e0000]"><a href='/login'>Login</a></button>
          <button type="button" class="px-9 py-1.5 text-lg rounded-md font-medium bg-[#8e0000] text-white"><a href='/signup'>Sign Up</a></button>
        </div>
      </ul>
      </div>
      <div className="bg-gradient-to-r from-[#e1d476] via-gray-600 to-[#153e8d] h-2"></div>
      {props.children}
    </div>
  )
}

export default Navbar;