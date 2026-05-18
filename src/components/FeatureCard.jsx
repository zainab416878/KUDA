import React from "react"

const FeatureCard = ({icon, text}) => {
    return (
        <>
        <div className="flex flex-row md:flex-col items-center md:items-start  gap-4 bg-white p-5 rounded-2xl shadow-sm">
            <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#DFE3FF] flex items-center justify-center">
                <img src={icon} alt="feature icon" className="object-contain"/>
            </div>
            <p className="text-[13px] font-bold text-[#40196D]">
                {text}
            </p>

        </div>
        </>
    )
}

export default FeatureCard