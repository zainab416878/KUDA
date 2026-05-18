import React from "react";

const InfoSection = ({
    title, 
    text, 
    link,
    icon, 
    image,
    reverse = false,
}) => {
    return (
        <>
        <section className="py-24">
            <div 
            className={`max-w-4xl mx-auto px-6 flex  flex-col items-center gap-24 md:flex-row 
            ${reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#40196D] leading-tight">
                        {title}
                    </h2>
                    <p className="mt-6 text-md text-black mb-5">
                        {text}
                    </p>
                    <a href="#" className="text-[#40196D] font-bold flex items-center justify-center md:justify-start gap-2">
                        <span className="underline">
                            {link}
                        </span>
                        {icon}
                    </a>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className=" shrink-0 h-72 w-72 rounded-full bg-[#DFE3FF]">
                        <img src={image} alt="section image" className="object-contain"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default InfoSection