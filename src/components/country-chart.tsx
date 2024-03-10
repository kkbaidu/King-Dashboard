import { countriesChart } from "../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Chart from "./chart";

import 'swiper/css';
import 'swiper/css/pagination';

const DeskCountryChart = () => {
    return (
        <div>
            <div className="hidden md:flex flex-row w-[130%] md:w-full justify-between">
            {countriesChart.map(({flag, currency, amount, chartImage, arrowDirection, percentage, color}, index) => {
                return (
                <div className={`flex flex-col ${color} md:w-[25vw] p-[20px] rounded-[10px] shadow-lg`} key={index}>
                    <div className="flex flex-row md:w-[35%] justify-between mb-6">
                        <img src={ flag } alt="" className="w-[50px] h-[50px] rounded-full" />
                        <span className="flex flex-col">
                            <span className="font-bold text-[18px]">{ amount }</span>
                            <span className="text-[#a6a5a7] text-[12px]">{ currency }</span>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        {/* <img src={ chartImage } alt="" className="w-[16vw]" /> */}
                        <Chart equivalentCurrency={currency}/>
                        <span className="flex flex-row w-[55px] h-[30px] justify-between items-end">
                            <span className="flex justify-center items-center bg-[#000] rounded-full text-white w-[20px] h-[20px] mb-1"> { arrowDirection } </span> 
                            <span className=""> {`${percentage}%`} </span>
                        </span>
                    </div>
                </div>
                )}
                )}
            </div>
        </div>
    )
}

const MobileCountryChart = () => {
    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {
                countriesChart.map(({flag, currency, amount, chartImage, arrowDirection, percentage, color}, index) => {
                    return (
                        <SwiperSlide className="aspect-w-1 aspect-h-1 overflow-hidden rounded-[10px] pb-2 cursor-grab" key={index}>
                            <div className={`flex flex-col ${color} w-full p-[20px] rounded-[10px] h-[250px] shadow-xl`}>
                                <div className="flex flex-row w-[35%] justify-between mb-10">
                                    <img src={ flag } alt="" className="w-[50px] h-[50px] rounded-full mr-2" />
                                    <span className="flex flex-col">
                                        <span className="font-bold text-[18px]">{ amount }</span>
                                        <span className="text-[#a6a5a7] text-[12px]">{ currency }</span>
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-end">
                                    {/* <img src={ chartImage } alt="" className="w-[40vw]" /> */}
                                    <Chart equivalentCurrency={currency}/>
                                    <span className="flex flex-row w-[55px] h-[30px] justify-between items-end">
                                        <span className="flex justify-center items-center bg-[#000] rounded-full text-white w-[20px] h-[20px] mb-1"> { arrowDirection } </span> 
                                        <span className=""> {`${percentage}%`} </span>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })
            }
            </Swiper>
        </div>
    )
}

export {
    DeskCountryChart,
    MobileCountryChart
};