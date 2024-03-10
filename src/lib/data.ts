import { NavButtons, CountriesChart, TransactionDetails, BarGraphData } from "./types"

const navButtons: NavButtons[

] = [
    {
        name: "Overview", 
        image: require("../assets/overview-icon.png")},
    {
        name: "Analytics", 
        image: require("../assets/analytics-icon.png")},
    {
        name: "Card", 
        image: require("../assets/navcard-icon.png")},
    {
        name: "Manage", 
        image: require("../assets/manage-icon.png")},
    {
        name: "Settings", 
        image: require("../assets/settings-icon.png")},
    {
        name: "Support", 
        image: require("../assets/support-icon.png")},
]

const countriesChart: CountriesChart[] = [
    {
        flag: require("../assets/us-flag.webp"),
        currency: "US dollar",
        amount: 4558,
        chartImage: require("../assets/us-chart.png"),
        arrowDirection: "⬈",
        percentage: 33,
        color: "bg-[#efedfa]",
    },
    {
        flag: require("../assets/euro-flag.png"),
        currency: "Euro",
        amount: 2670,
        chartImage: require("../assets/euro-chart.png"),
        arrowDirection: "⬋",
        percentage: 12,
        color: "bg-[#faf1e6]",
    },
    {
        flag: require("../assets/uk-flag.webp"),
        currency: "Pound",
        amount: 5590,
        chartImage: require("../assets/uk-chart.png"),
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

const transactionDetails: TransactionDetails[] = [
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
        amount: 1000,
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

const barGraphData: BarGraphData[] = [
    {
        currency: "US dollar",
        data: [
            {
                height: ["h-[90px]", "h-[75px]", "h-[60px]", "h-[100px]", "h-[90px]", "h-[75px]", "h-[60px]"],
                color: "bg-[#917bf9]",
            }
        ]
    },
    {
        currency: "Euro",
        data: [
            {
                height: ["h-[50px]", "h-[90px]", "h-[90px]", "h-[100px]", "h-[65px]", "h-[60px]", "h-[50px]"],
                color: "bg-[#ef9d31]",
            }
        ]
    },
    {
        currency: "Pound",
        data: [
            {
                height: ["h-[100px]", "h-[80px]", "h-[70px]", "h-[80px]", "h-[70px]", "h-[90px]", "h-[100px]"],
                color: "bg-[#e94465]",
            }
        ]
    }
]

export { navButtons, countriesChart, paymentDetails, transactionDetails, barGraphData };