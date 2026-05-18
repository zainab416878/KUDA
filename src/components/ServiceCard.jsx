import React from "react";

const ServiceCard = ({icon, title, text, link, ICON}) => {
    return (
        <>
        <div className=" flex flex-col gap-4 bg-white p-5 rounded-2xl shadow-sm">
            <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#DFE3FF] flex items-center justify-center">
                <img src={icon} alt="Icon" className="object-contain"/>
            </div>
            <h1 className="text-xl font-bold text-[#40196D]">{title}</h1>
            <p className="text-sm text-black">{text}</p>
            <a href="#" className="text-[#40196D] font-bold flex items-center md:justify-start gap-2">
                <span className="underline">{link}</span>
                {ICON}
            </a>
        </div>
        </>
    )
}

export default ServiceCard