import React from 'react'
import { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { BrowserRouter,Route,Routes, Link, Links} from 'react-router-dom';

export default function Nav() {
const [open , setopen ] = useState(false)
  return (
    <div>
        <nav className='w-full h-[70px] hidden lg:flex bg-white shadow-md'>
            <div className='w-[20%] h-full '>
                <img src="public/image/image.png" alt=""  className='h-full'/>
            </div>
            <div className='w-[60%] h-full flex items-center'>
                <div className='w-[70%] h-full '>
                    <ul className='flex w-full justify-evenly h-full items-center text-md font-bold'>
                        <li className='cursor-pointer'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to={'/category'}>Category</Link>
                        </li>
                        <li className='cursor-pointer'>Deal</li>
                        <li className='cursor-pointer'>What's New</li>
                        <li className='cursor-pointer'>Delivery</li>
                        
                    </ul>
                </div>
                <div className='w-[30%] '>
                    <input type="text" className='border-2 border-black rounded-[25px] outline-none
                    px-2 py-1' placeholder='Search product ' />
                </div>
            </div>
            <div className='w-[20%] h-full flex items-center pl-10 font-bold'>
                <div className='w-[50%] '>
                    <h1>Account</h1>
                </div>
                <div className='w-[50%]'>
                    <h1>Card</h1>
                </div>
            </div>
        </nav>


        {/* ----------- phone screen ---------- */}
        <nav className='w-full h-[50px] bg-white shadow-md flex items-center lg:hidden'>
            <div className='w-[20%] h-full'>
                <img src="public/image/image.png" alt=""  className='h-full'/>
            </div>
            <div className='w-[60%] h-full px-4 flex items-center justify-center'>
                    <input type="text" className='border-2 w-full border-black rounded-[25px] outline-none
                    px-2 py-1' placeholder='Search product ' />
            </div>
            <div className='flex justify-end pr-7 text-2xl w-[20%]'>
                <div onClick={()=>setopen(!open)}>
                    {!open ? <TiThMenuOutline /> :<IoMdClose />}
                </div>
            </div>
            <div className={`${open ? 'w-full h-[100vh] bg-black/40 fixed top-0 left-0':''}`}
            onClick={()=>setopen(!open)}>

            </div>
            <div  className={`${open ? "w-[50%] h-[100vh] bg-white/95 fixed left-0 top-0 pt-12 " : ''}`}>
                <div className={`${open ? 'w-full' : 'hidden'}`}>
                        <ul className='px-2 text-xl font-bold'>
                        <li className='py-2'>Home</li>
                        <li className='py-2'>Category</li>
                        <li className='py-2'>Deal</li>
                        <li className='py-2'>What's New</li>
                        <li className='py-2'>Delivery</li>
                        <li className='py-2'>Account</li>
                        <li className='py-2'>Card</li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
