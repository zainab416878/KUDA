import React from "react";
import KudaPhone from "../assets/KudaPhone.svg"
import AppStore from "../assets/AppStore.svg"
import GooglePlay from "../assets/GooglePlay.svg"
import cbn from "../assets/cbn.jpeg"
import ndic from "../assets/ndic.jpeg"

const Hero = () => {
    return (
        <>
        <section className="px-6 pt-24 pb-20 bg-white">
            <div className=" md:flex-row flex flex-col max-w-4xl mx-auto flex items-center justify-between gap-12">
                <div className="flex-1 max-w-xl text-center md:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-[#40196D] mb-4">Get more with Kuda.</h1>
                    <p className="text-black text-base leading-relaxed">Earn 50 Kuda Coins on your Tier 3 Kuda account to unlock cashback, discounts, budgeting, and more Premium rewards.</p>
                    <div className="mt-3 flex gap-4 items-center justify-center md:justify-start">
                        <img src={AppStore} alt="App store" className="cursor-pointer"/>
                        <img src={GooglePlay} alt="Google play" className="cursor-pointer"/>
                    </div>
                    <div className="flex items-center text-[12px] text-gray-400 mt-8 gap-3  justify-center md:justify-start">
                        <span>Fully Licensed by the CBN</span><img src={cbn} alt="CBN" className="h-5 w-5"/>
                        <span>Deposits Insured by</span><img src={ndic} alt="NDIC" className="h-5 w-13"/>
                    </div>
                </div>
                    <img src={KudaPhone} alt="Kuda phone" className="w-full max-w-[350px]"/>

            </div>
        </section>
        </>
    )
}

export default Hero
