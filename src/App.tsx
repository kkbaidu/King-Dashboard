import React from 'react';
import { Sidebar } from './components/side-bar';
import Payment from './components/payment';
import Transactions from './components/transactions';
import bellIcon from "./assets/bell-icon.png";
import profilePic from "./assets/profile-pic.png";
import dropdownIcon from "./assets/dropdown-icon.png";
import { DeskCountryChart, MobileCountryChart} from './components/country-chart';
import graph from "./assets/graph.png";
import menuIcon from "./assets/menu-icon.webp";

function App() {
  return (
    <div className="md:flex md:flex-col">
      <div className='hidden md:block md:w-[15%] lg:w-[15%] fixed'>
        <Sidebar />
      </div>
      <div className='w-full px-[20px] md:px-normal md:pl-[18%] md:pr-[50px] md:py-[30px]'>
        <div id='nav bar' className='w-full h-[50px] flex flex-row justify-between items-center border-b-2 border-gray-100 mt-3 md:mt-auto shadow-sm'>
          <div className='flex flex-row items-center'>
            <div className="drawer mh:hidden lg:hidden w-[50px] h-[40px] z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button w-[40px] h-[40px]">
                  <img src={menuIcon} alt="" className='rounded w-[40px] h-[40px] md:hidden lg:hidden' />
                </label>
              </div> 
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu w-50 h-full bg-white">
                  <Sidebar />
                </div>
              </div>
            </div>
            <text className='text-[18px] md:text-[25px] font-bold'> Kingsley Baidu 👋 </text>
          </div>
          <div className='flex flex-row w-[110px] md:w-[140px] justify-around items-center'>
            <img src={bellIcon} alt='' className='w-[35px] h-[35px] rounded-full shadow-md cursor-pointer hover:animate-pulse'/>
            <img src={profilePic} alt='' className='w-[35px] h-[35px] rounded-full cursor-pointer z-10' />
            <div className="dropdown dropdown-end -ml-4">
              <div tabIndex={0} role="button" className="btn bg-white outline-none border-none hover:bg-white w-[50px]">
                <img src={dropdownIcon} alt='' className='w-[11px] h-[11px] cursor-pointer' />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>
                    <img src={profilePic} alt='' className='w-[35px] h-[35px] rounded-full cursor-pointer' />
                    <text>Kingsley Baidu </text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id='country charts' className='md:w-full'>
          <div className='text-[20px] font-bold pt-[5vh] pb-6 md:py-3'> Account </div>
          <div className='hidden md:block'>
            <DeskCountryChart />
          </div>
          <div className='md:hidden'>
            <MobileCountryChart />
          </div>
        </div>
        <div id='down-div' className='flex flex-col md:flex-row pt-[3vh]'>
          <div id='grapg and money send' className='flex flex-col w-full'>
            <div id='title' className='flex flex-row justify-between items-center w-full my-3 h-[60px] border-b-2 border-gray-100 shadow-sm'>
              <text className='text-[20px] font-bold'>Send Money</text>
              <span className='flex flex-row justify-between w-[140px] md:w-[9vw] h-full'>
                <select className='border-none outline-none bg-white w-[50px]'>
                  <option> USD </option>
                  <option> Euro </option>
                  <option> Pound </option>
                </select>
                <button className='rounded-[10px] border border-black w-[80px] h-[40px] mt-2'> Send </button>
              </span>
            </div>
            <span className='flex flex-col justify-between my-9 md:my-0 items-center w-full border-b-2 border-gray-100 shadow-sm'>
              <div className='flex flex-row justify-between items-center w-full'>
                <text className='text-[#a6a5a7]'> Today </text>
                <text> 1USD = 104.00BDT </text>
              </div>
              <img src={graph} alt='' className='py-[3vh] md:h-auto' />
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
          <div id='transactions' className='flex flex-col md:w-[47%] w-full pt-[3vh] pb-6 md:pl-[2vh]'>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
