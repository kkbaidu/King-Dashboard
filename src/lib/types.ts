
export type NavButtons = {
    name: string, 
    image: any,
}

export type CountriesChart = {
    flag: any,
    currency: string,
    amount: number,
    arrowDirection: string,
    percentage: number,
    color: string,
}

export type PaymentDetails = {
    image: any,
    title: string,
    paymentType: string,
    amount: number,
    currency: string,
}

export type TransactionDetails = {
    image: any,
    name: string,
    date: string,
    amount: number,
    currency: string,
}

export type BarGraphData = {
    currency: string,
    data: [
        {
        height: string[],
        color: string,
        }
    ]
}

export type Navigation = {
    name: string;
    image: any;
    alt: string;
    isActive: boolean;
}

export type ChartPropType = {
    equivalentCurrency: string,
}
