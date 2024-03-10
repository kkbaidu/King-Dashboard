import upTransact from "../assets/up-transact.png";
import { transactionDetails } from "../lib/data";

const months: string[] = ["Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const Transactions = () => {
    return (
        <div className="border rounded-[10px] w-full">
            <div className="flex flex-row justify-between items-center px-4 h-12 text-white bg-[#070f25] rounded-[10px]">
                <span className="text-[22px] font-bold"> Transactions </span>
                <select className="text-white bg-[#070f25] outline-none w-[70px]">
                    {months.map(month => <option> {month} </option>)}
                </select>
            </div>
                {transactionDetails.map(({image, name, date, amount, currency}, index) => {
                    return (
                    <div className="flex flex-row items-center my-[6px] hover:text-[#fff] hover:bg-[#cccccc] rounded-md cursor-pointer h-[70px]" key={index}>
                        <div className="flex flex-row w-full px-3">
                            <img src={image} alt="" className="rounded-full w-[45px] h-[45px] mr-2" />
                            <span className="flex flex-col">
                                <span className="font-bold"> {name} </span>
                                <span className="text-[#a6a5a7]"> {date} </span>
                            </span>
                        </div>
                        <div>
                            <span className="flex flex-col w-[80px] md:w-[5vw]">
                                <span className="font-bold"> {amount} </span>
                                <span className="text-[#a6a5a7]"> {currency} </span>
                            </span>
                        </div>
                    </div>
                    )
                }
                )}
        </div>
    )
}

export default Transactions;