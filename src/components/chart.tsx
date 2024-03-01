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
                            <div className={`${data.color} rounded-[5px] h-[${data.height[0]}px] w-[18px]`}></div>
                            <div className={`${data.color} rounded-[5px] h-[${data.height[1]}px] w-[18px]`}></div>
                            <div className={`${data.color} rounded-[5px] h-[${data.height[2]}px] w-[18px]`}></div>
                            <div className={`${data.color} rounded-[5px] h-[${data.height[3]}px] w-[18px]`}></div>
                            <div className={`${data.color} rounded-[5px] h-[${data.height[4]}px] w-[18px]`}></div>
                            <div className={`${data.color} rounded-[5px] h-[${data.height[5]}px] w-[18px]`}></div>
                            <div className={`${data.color} rounded-[5px] h-[${data.height[6]}px] w-[18px]`}></div>
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