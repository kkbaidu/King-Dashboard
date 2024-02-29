import usChart from "../assets/us-chart.png";
import ukFlag from "../assets/uk-flag.webp";
import { countriesChart } from "../lib/data";

const CountryChart = () => {
    return (
        <div className="flex flex-row w-full justify-between">
        {countriesChart.map(({flag, currency, amount, chartImage, arrowDirection, percentage, color}) => {
            return (
            <div className={`flex flex-col ${color} w-[55vh] p-[20px] rounded-[10px]`}>
                <div className="flex flex-row w-[35%] justify-between mb-6">
                    <img src={ flag } alt="" className="w-[50px] h-[50px] rounded-full" />
                    <span className="flex flex-col">
                        <text className="font-bold text-[18px]">{ amount }</text>
                        <text className="text-[#a6a5a7] text-[12px]">{ currency }</text>
                    </span>
                </div>
                <div className="flex flex-row justify-between items-end">
                    <img src={ chartImage } alt="" className="w-[16vw]" />
                    <span className="flex flex-row w-[55px] h-[30px] justify-between items-end">
                        <span className="flex justify-center items-center bg-[#000] rounded-full text-white w-[20px] h-[20px] mb-1"> { arrowDirection } </span> 
                        <text className=""> {`${percentage}%`} </text>
                    </span>
                </div>
            </div>
            )}
            )}
        </div>
    )
}

export default CountryChart;