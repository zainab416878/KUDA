import React from "react";
import FeatureCard from "../components/FeatureCard.jsx"
import inline from "../assets/inline.svg"
import card from "../assets/card.svg"
import transfer from "../assets/transfer.svg"
import save from "../assets/save.svg"
import gift from "../assets/gift.svg"

const Features = () => {
    return (
        <>
        <section className="px-10 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
                <FeatureCard
                icon={card}
                text="Order a Kuda card on the app with pickup and delivery options."
                />

                <FeatureCard
                icon={inline}
                text="Enjoy cashless payment options online and offline."
                />

                <FeatureCard
                icon={gift}
                text="Pay your essential bills and buy gift cards easily."
                />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 md:mx-auto">
                <FeatureCard
                icon={transfer}
                text="Get 25 free transfers to Nigerian banks every month."
                />

                <FeatureCard
                icon={save}
                text="Save money automatically any time you spend."
                />
                </div>
            </div>
        </section>
        </>
    )
}

export default Features