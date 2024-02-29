import React from 'react';
import { Sidebar } from './components/side-bar';
import bellIcon from "./assets/bell-icon.png";
import profilePic from "./assets/profile-pic.png";
import dropdownIcon from "./assets/dropdown-icon.png";
import CountryChart from './components/country-chart';

function App() {
  return (
    <div className="flex flex-row">
      <div className='w-[15%]'>
        <Sidebar />
      </div>
      <div className='w-[85%] px-[50px] py-[30px]'>
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
      </div>
    </div>
  );
}

export default App;
