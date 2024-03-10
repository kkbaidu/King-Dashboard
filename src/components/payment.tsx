import salaryImage from "../assets/salary-img.png";
import { paymentDetails } from "../lib/data";

const Payment = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
            {paymentDetails.map(({image, title, paymentType, amount, currency}) => 
            {
            return (
                <div className='flex flex-col p-4 rounded-[10px] space-y-4 md:w-[16vw] bg-white'>
                    <div className="flex flex-row w-full">
                        <img src={image} alt="" className="rounded-full mr-2 w-[47px] h-[47px]" />
                        <span className="flex flex-col">
                            <span className="font-bold"> {title} </span>
                            <span className="text-[#a6a5a7]"> {paymentType} </span>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="font-extrabold"> {amount} </span>
                        <span className="text-[#a6a5a7]"> {currency} </span>
                    </div>
                </div>
                )}
            )}
        </div>
    )
}

export default Payment;