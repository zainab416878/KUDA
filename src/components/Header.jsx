import React from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/Logo.svg"
import nigeriaIcon from "../assets/NigeriaIcon.svg"
import { useState } from "react";

console.log(logo)
const Header =() => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <header className=" p-2 w-full bg-white border-b border-gray-100 fixed top-0 z-50 shadow-sm ">
            <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <img src={logo} alt="Kuda logo" className="h-8 w-[88px] block object-contain cursor-pointer"/>
                    <nav className="hidden md:flex gap-8 items-center text-[12px] font-bold text-[#40196D] ">
                    <a href="#" className=" flex items-center gap-1 hover:text-black transition">Personal <IoMdArrowDropdown/></a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition">Business <IoMdArrowDropdown/></a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition">Company <IoMdArrowDropdown/></a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition">Help <IoMdArrowDropdown/></a>
                </nav>
                </div>
                <div className="flex items-center gap-6">                
                <div className="hidden md:flex gap-7 items-center text-[12px] font-bold">
                    <a href="#" className="hidden md:flex hover:text-black transition text-[#40196D]">Sign In</a>
                    <button className="h-10 w-25 bg-[#40196D] text-white rounded-lg hover:bg-white hover:text-[#40196D] hover: border border-[#40196D] hover:rounded-full transition cursor-pointer ">Join Kuda</button>
                </div>
                    <div className="h-8 w-8 rounded-full bg-[#B2DBCA] cursor-pointer overflow-hidden flex items-center justify-center mx-2">
                        <img src={nigeriaIcon} alt="nigeria" className="h-8 w-8 object-contain"/>
                    </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
                        <span className={`block w-6 h-0.5 bg-[#40196D] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-[#40196D] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-[#40196D] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                </div>
            </div>

                {isOpen && (
                    <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 text-sm text-[#40196D]">
                    <a href="#" className=" flex items-center gap-1 hover:text-black transition">Personal <IoMdArrowDropdown/></a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition">Business <IoMdArrowDropdown/></a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition">Company <IoMdArrowDropdown/></a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition">Help <IoMdArrowDropdown/></a>
                    <a href="#" className="hidden md:flex hover:text-black transition text-[#40196D]">Sign In</a>
                    <button className="h-10 w-25 bg-[#40196D] text-white rounded-lg hover:bg-white hover:text-[#40196D] hover: border border-[#40196D] hover:rounded-full transition cursor-pointer ">Join Kuda</button>
            </div>
                )}
        </header>
        </>
    )
}

export default Header
