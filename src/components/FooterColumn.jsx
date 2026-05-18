import React from "react";

const FooterColumn = ({title, links}) => {
    return (
        <div>
        <h3 className="font-bold text-[#40196D] mb-4">
            {title}
        </h3>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className="text-sm text-black hover:text-[#40196D]">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default FooterColumn