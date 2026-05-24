import React from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/Logo.svg"
import nigeriaIcon from "../assets/NigeriaIcon.svg"
import { useState } from "react";
import { NavData } from "./NavData";
console.log(logo)
const Header =() => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(null)
    return(
        <>
        <header className=" p-2 w-full bg-white border-b border-gray-100 fixed top-0 z-50 shadow-sm ">
            <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <img src={logo} alt="Kuda logo" className="h-8 w-[88px] block object-contain cursor-pointer"/>
                    <nav className="hidden md:flex gap-8 items-center text-[12px] font-bold text-[#40196D] ">
                        {Object.keys(NavData).map((item) => (
                            <div
                            key={item}
                            className="relative"
                            onMouseEnter={() => setIsActive(item)}
                            onMouseLeave={() => setIsActive(null)}>
                                <button className="flex items-center gap-1 hover:text-black transition py-3">
                                    {item} <IoMdArrowDropdown/>
                                </button>
                                {isActive === item && (
                                    <div className="absolute top-full left-0 bg-white rounded-2xl shadow-xl boarder border-gray-100 z-50 flex min-w-[500px]">
                                        <div className="flex flex-col gap-1 p-4 border-r border-gray-100 min-w-[220px]">
                                            {NavData[item].left.map((link) => (
                                                <a 
                                                key={link.label}
                                                href="#"
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 group transition">
                                                    <div className="w-8 h-8 rounded-full bg-[#DFE3FF] flex items-center justify-center flex-shrink-0 text-[#40196D]">
                                                        <img src={link.icon} alt={link.label} className="object-contain"/>
                                                    </div>
                                                    <span className="text-sm font-semibold text-[#40196D] group-hover:text-black transition">
                                                        {link.label}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                        {NavData[item].right.length > 0 && (
                                            <div className="flex flex-col gap-6 p-6 min-w-[220px] max-h-[400px] overflow-y-auto">
                                                {NavData[item].right.map((group) => (
                                                    <div key={group.category}>
                                                        <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                                                            {group.category}
                                                        </p>
                                                        <div className="flex flex-col gap-2">
                                                            {group.items.map((link) => (
                                                                <a key={link.label}
                                                                href="#"
                                                                className="flex items-center gap-3 py-1.5 hover:opacity-70 transition">
                                                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${link.color}`}>
                                                                        <img src={link.icon} alt={link.label} className="object-contain"/>
                                                                    </div>
                                                                    <span className="text-sm font-semibold text-gray-700">
                                                                        {link.label}
                                                                    </span>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
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
