import React from "react";
import download1 from "../assets/download1.svg"
import download2 from "../assets/download2.svg"
import download3 from "../assets/download3.svg"
import download4 from "../assets/download4.svg"
import download5 from "../assets/download5.svg"
import eletricity from "../assets/eletricity.svg"
import airtime from "../assets/airtime.svg"
import betting from "../assets/betting.svg"
import Cardless from "../assets/Cardless.svg"
import TV from "../assets/TV.svg"
import giftCards from "../assets/giftCards.svg"
import internet from "../assets/internet.svg"
import Transport from "../assets/Transport.svg"
import overdrafts from "../assets/overdrafts.svg"
import loans from "../assets/loans.svg"


export const NavData = {
    Personal: {
        left: [
            { icon: download1, label: "Discover Personal"},
            { icon: download2, label: "Transfer & Spend"},
            { icon: download3, label: "Save"},
            { icon: download4, label: "Investments"},
            { icon: download5, label: "Kuda Card"}
        ],
        right: [
            {
                category: "PAYMENTS",
                items: [
                    { icon: eletricity, label: "Electricity"},
                    { icon: airtime, label: "Airtime"},
                    { icon: internet, label: "Internet"},
                    { icon: giftCards, label: "Gift Cards"},
                    { icon: Cardless, label: "Cardless Payments"},
                    { icon: TV, label: "TV"},
                    { icon: betting, label: "Betting"},
                    { icon: Transport, label: "Transport"}
                ]
            },
            {
                category: "CREDIT",
                items: [
                    { icon: overdrafts, label: "Overdrafts"},
                    { icon: loans, label: "Loans"}
                ]
            }
        ]
    }
}