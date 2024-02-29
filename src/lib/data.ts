import { Navigation } from "./types";
import usFlag from "../assets/us-flag.webp";
import usChart from "../assets/us-chart.png";
import ukFlag from "../assets/uk-flag.webp";
import ukChart from "../assets/uk-chart.png";
import euroFlag from "../assets/euro-flag.png";
import eauroChart from "../assets/euro-chart.png";

const navButtons = [
    {name: "Overview", image: require("../assets/overview-icon.png")},
    {name: "Analytics", image: require("../assets/analytics-icon.png")},
    {name: "Card", image: require("../assets/navcard-icon.png")},
    {name: "Manage", image: require("../assets/manage-icon.png")},
    {name: "Settings", image: require("../assets/settings-icon.png")},
    {name: "Support", image: require("../assets/support-icon.png")},
]

const countriesChart = [
    {
        flag: usFlag,
        currency: "US dollar",
        amount: 4558,
        chartImage: usChart,
        arrowDirection: "⬈",
        percentage: 33,
        color: "bg-[#efedfa]",
    },
    {
        flag: euroFlag,
        currency: "Euro",
        amount: 2670,
        chartImage: eauroChart,
        arrowDirection: "⬋",
        percentage: 12,
        color: "bg-[#faf1e6]",
    },
    {
        flag: ukFlag,
        currency: "Pound",
        amount: 5590,
        chartImage: ukChart,
        arrowDirection: "⬈",
        percentage: 33,
        color: "bg-[#f9e8eb]",
    },
]

export { navButtons, countriesChart };