import React from 'react';
import { Sidebar } from './components/side-bar';
import Payment from './components/payment';
import Transactions from './components/transactions';
import bellIcon from "./assets/bell-icon.png";
import profilePic from "./assets/profile-pic.png";
import dropdownIcon from "./assets/dropdown-icon.png";
import CountryChart from './components/country-chart';
import graph from "./assets/graph.png";

function App() {
  return (
    <div className="flex flex-row">
      <div className='w-[15%] fixed'>
        <Sidebar />
      </div>
      <div className='w-full pl-[18%] pr-[50px] py-[30px]'>
        <div id='nav bar' className='w-full h-[50px] flex flex-row justify-between items-center border-b-2 border-gray-100 shadow-sm'>
          <text className='text-[25px] font-bold'> Kingsley Baidu 👋 </text>
          <div className='flex flex-row w-[8vw] justify-around items-center'>
            <img src={bellIcon} alt='' className='w-[35px] h-[35px] rounded-full shadow-md cursor-pointer'/>
            <img src={profilePic} alt='' className='w-[35px] h-[35px] rounded-full cursor-pointer' />
            <img src={dropdownIcon} alt='' className='w-[11px] h-[11px] cursor-pointer' />
          </div>
        </div>
        <div id='country charts'>
          <div className='text-[20px] font-bold py-3'> Account </div>
          <CountryChart />
        </div>
        <div id='down-div' className='flex flex-row pt-[3vh]'>
          <div id='grapg and money send' className='flex flex-col w-full'>
            <div id='title' className='flex flex-row justify-between items-center w-full my-3 h-[60px] border-b-2 border-gray-100 shadow-sm'>
              <text className='text-[20px] font-bold'>Send Money</text>
              <span className='flex flex-row justify-between w-[9vw] h-full'>
                <select className='border-none outline-none bg-white w-[50px]'>
                  USD
                  <option> USD </option>
                </select>
                <button className='rounded-[10px] border border-black w-[80px] h-[40px] mt-2'> Send </button>
              </span>
            </div>
            <span className='flex flex-col justify-between items-center w-full border-b-2 border-gray-100 shadow-sm'>
              <div className='flex flex-row justify-between items-center w-full'>
                <text className='text-[#a6a5a7]'> Today </text>
                <text> 1USD = 104.00BDT </text>
              </div>
              <img src={graph} alt='' className='py-[3vh]' />
            </span>
            <div className='flex flex-row justify-between items-center w-full'>
              <text className='text-[#a6a5a7]'> A month ago </text>
              <text className=''> Today </text>
            </div>
            <div id='payments' className='flex flex-col bg-[#efedfa] rounded-[20px] my-5 p-5'>
              <div className='flex flex-row justify-between items-center w-full pb-2'>
                <text className='font-bold text-[20px]'> Send Money </text>
                <text className='underline font-bold cursor-pointer'> View All </text>
              </div>
              {/* Payment Components */}
              <Payment />
            </div>
          </div>
          <div id='transactions' className='flex flex-col w-[47%] pt-[3vh] pl-[2vh]'>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
