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

const paymentDetails = [
    {
        image: require("../assets/salary-img.png"),
        title: "Salary",
        paymentType: "Regular Payment",
        amount: 3500,
        currency: "US dollar",
    },
    {
        image: require("../assets/web-app-image.png"),
        title: "Web Project",
        paymentType: "Unregular Payment",
        amount: 6500,
        currency: "Euro",
    },
    {
        image: require("../assets/app-project-image.png"),
        title: "App Project",
        paymentType: "Regular Payment",
        amount: "1200",
        currency: "Pound",
    },
]

const transactionDetails = [
    {
        image: require("../assets/up-transact.png"),
        name: "Jane Cooper",
        date: "08 Sep, 2022",
        amount: 1200,
        currency: "US doolar",
    },
    {
        image: require("../assets/up-transact.png"),
        name: "Leslie Alexander",
        date: "08 Sep, 2022",
        amount: 2890,
        currency: "Euro",
    },
    {
        image: require("../assets/down-transact.png"),
        name: "Flight Ticket",
        date: "08 Sep, 2022",
        amount: "1000",
        currency: "Pound",
    },
    {
        image: require("../assets/up-transact.png"),
        name: "Robert Fox",
        date: "08 Sep, 2022",
        amount: 1000,
        currency: "US dollar",
    },
    {
        image: require("../assets/down-transact.png"),
        name: "KFC",
        date: "08 Sep, 2022",
        amount: 120,
        currency: "Euro",
    },
    {
        image: require("../assets/down-transact.png"),
        name: "Jacob Jones",
        date: "08 Sep, 2022",
        amount: 1700,
        currency: "US dollar",
    },
    {
        image: require("../assets/up-transact.png"),
        name: "Dev Cooper",
        date: "08 Sep, 2022",
        amount: 4500,
        currency: "Pound",
    },
]

export { navButtons, countriesChart, paymentDetails, transactionDetails };