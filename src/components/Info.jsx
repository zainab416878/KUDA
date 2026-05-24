import InfoSection from "../components/InfoSection.jsx";
import { FaArrowRight } from "react-icons/fa";
import lady from "../assets/Lady.svg"
import Lady2 from "../assets/Lady2.svg"
import ATM from "../assets/ATM.svg"
import Man from "../assets/Man.svg"

const Info = () => {
    return (
        <>
        <InfoSection
        title="Your phone + our app + a debit card = a simpler life."
        text="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
        link="Open An Account in Minutes"
        icon={<FaArrowRight size={14}/>}
        image={lady}
        />

        <InfoSection
        title="It’s your money, we just help you manage it."
        text="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."
        reverse={true}
        />

        <InfoSection
        title="Save money as you spend it, seriously."
        text="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."
        link="See all our Savings"
        icon={<FaArrowRight size={14}/>}
        image={Lady2}
        />

        <InfoSection
        title="Turn off access, turn on safety."
        text="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try."
        link="Learn more about Cards"
        icon={<FaArrowRight size={14}/>}
        reverse={true}
        image={ATM}
        />

        <InfoSection
        title="We’re always happy to help you."
        text="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."
        link="Get Help"
        icon={<FaArrowRight size={14}/>}
        image={Man}
        />

        <InfoSection
        title="Fees as clear as glass."
        text="We’re serious about free banking, and we will never, ever charge you for anything without your consent."
        link="See all our fees"
        icon={<FaArrowRight size={14}/>}
        reverse={true}
        />
        </>
    )
}

export default Info