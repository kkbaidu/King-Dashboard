import { barGraphData } from "../lib/data";
import { ChartPropType } from "../lib/types";

const Chart = ({equivalentCurrency}: ChartPropType ) => {
    return (
        <div>
            {barGraphData.map(({currency, data}) => {
                return (
                    <>
                    {
                        currency === equivalentCurrency? 
                        <div className="flex flex-row justify-between items-end w-[160px] md:w-[200px] lg:w-[200px]">
                            {
                                data.map(({height, color}) => {
                                    return (
                                        <>
                                        {
                                            height.map((high) => {
                                                return (
                                                    <div className={`${color} rounded-[5px] h-[${high}px] w-[18px]`}></div>
                                                )
                                            })
                                        }
                                        </>
                                    )
                                })
                            }
                        </div> : false
                    }
                    </>
                )
            })
            }
        </div>
    )
}

export default Chart;