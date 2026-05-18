import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "../assets/Logo.svg"
const Footer = () => {
    return (
        <>
        <footer className="bg-white pt-20 pb-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 border-t pt-10 border-gray-400">

                        <img src={Logo} alt="KUDA"/>

                    <FooterColumn
                    title="Personal"
                    links={[
                        "Discover Personal",
                        "Transfer & Spend",
                        "Save",
                        "Investments",
                        "Kuda card",
                        "Loans",
                        "Overdrafts"
                    ]}
                    />

                    <FooterColumn
                    title="Business"
                    links={[
                        "Discover Business",
                        "Business Registration",
                        "softPOS",
                        "Invoicing",
                        "POS Machine",
                        "Business Loan",
                        "Business API"
                    ]}
                    />

                    <FooterColumn
                    title="Company"
                    links={[
                        "Blog",
                        "Press",
                        "Join Out Team",
                        "About Us",
                        "Kuda in Nigeria"
                    ]}
                    />

                    <FooterColumn
                    title="Help"
                    links={[
                        "Get Help",
                        "Scam Awareness",
                        "FAQs",
                        "Security",
                        "Contact Us",
                        "Self Help"
                    ]}
                    />

                    <FooterColumn
                    title="Transparency"
                    links={[
                        "Terms & Conditions",
                        "Privacy Policy",
                        "Information Security Policy",
                        "Cookie Policy",
                        "Whistleblowing Policy"
                    ]}
                    />
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer