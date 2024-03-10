import { barGraphData } from "../lib/data";
import { ChartPropType } from "../lib/types";

const Chart = ({equivalentCurrency}: ChartPropType ) => {
    return (
        <div className="h-[110px] flex items-end">
            {barGraphData.map(({currency, data}, index_1) => {
                return (
                    <div key={index_1} className="h-full flex items-end">
                    {
                        currency === equivalentCurrency? 
                        <div className="flex flex-row justify-between items-end w-[180px] md:w-[200px] lg:w-[200px] h-full" key={index_1}>
                            {
                                data.map(({height, color}) => {
                                    return (
                                        <span className="flex flex-row items-end justify-between h-[110px] w-[180px] md:w-[200px] lg:w-[200px]">
                                        {
                                            height.map((high, index_2) => {
                                                return (
                                                    <div className="flex items-end h-[110px]">
                                                        <div className={`${color} rounded-[5px] ${high} w-[18px]`} key={index_2}></div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </span>
                                    )
                                })
                            }
                        </div> : <></>
                    }
                    </div>
                )
            })
            }
        </div>
    )
}

export default Chart;