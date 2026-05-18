import React from "react";
import ServiceCard from "./ServiceCard";
import { FaArrowRight } from "react-icons/fa";
import loan from "../assets/loan.svg"
import spend from "../assets/spend.svg"
import briefcase from "../assets/briefcase.svg"

const Services = () => {
    return (
        <>
        <section className="px-6 py-10 bg-white">
            <div className="flex items-center justify-center mb-10 text-[#40196D] text-3xl md:text-4xl">
                <h1 className="font-bold">More for you</h1>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                icon={briefcase}
                title="Kuda Business"
                text="Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more."
                link="Learn more"
                ICON={<FaArrowRight size={14}/>}
                />

                <ServiceCard
                icon={spend}
                title="Transfer & Spend"
                text="Send money for free to any Nigerian account with 25 free transfers every month."
                link="Learn more"
                ICON={<FaArrowRight size={14}/>}
                />

                <ServiceCard
                icon={loan}
                title="Loans"
                text="Get instant loans up to ₦150,000 in the Kuda loan app easily in Nigeria without paperwork."
                link="Learn more"
                ICON={<FaArrowRight size={14}/>}
                />
            </div>
        </section>
        </>
    )
}

export default Services