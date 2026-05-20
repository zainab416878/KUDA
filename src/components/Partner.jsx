import React from "react";
import valar from "../assets/valar.svg"
import visa from "../assets/visa.svg"
import sbiHoldings from "../assets/sbiHoldings.svg"
import target from "../assets/target.svg"
import entreeCapital from "../assets/entreeCapital.svg"

const Partner = () => {
    return (
        <>
        <section className="px-6 pt-24 pb-20 bg-[#FBFBFB] flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl text-[#40196D] text-center mb-16">Our Partners</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-6">
                <img src={valar} alt="valar" className="cursor-pointer"/>
                <img src={entreeCapital} alt="entreeCapital" className="cursor-pointer"/>
                <img src={sbiHoldings} alt="sbiHoldings" className="cursor-pointer"/>
                <img src={target} alt="target" className="cursor-pointer"/>
                <img src={visa} alt="visa" className="cursor-pointer"/>
            </div>
            </div>
        </section>
        </>
    )
}

export default Partner