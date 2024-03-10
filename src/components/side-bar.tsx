import React from 'react';
import { useState } from 'react';
import profilePic from "../assets/profile-pic.png";
import cardIcon from "../assets/card-icon.png";
import signoutImg from "../assets/signout-img.svg";
import { navButtons } from '../lib/data';
import uploadProfile from "../assets/upload-profile.png";

export const Sidebar = () => {
    const [activeButton, setActiveButton] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    };
    return (
        <nav className='h-screen flex flex-col justify-between items-center md:py-[15px] md:border-r-2 md:border-gray-100 md:shadow-xl bg-white'>
            <div className='space-y-[20px]'>
                <span className='flex flex-row'>
                    <img src={cardIcon} alt='Profile Picture'/>
                    <span className='flex justify-end items-end pl-1 text-[20px] font-bold'> King's Dashboard </span>
                </span>
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='relative'>
                        <img src={profilePic} className='w-[100px] rounded-full mb-2'/>
                        <img src={uploadProfile} className='w-[20px] h-[20px] absolute right-0 bottom-3 rounded-full' alt="" />
                    </div>
                    <span className='font-extrabold text-[20px]'> Kingsley Baidu </span>
                    <span className='font-extralight text-[13px]'> Software Developer </span>
                </div>
                <div className='flex flex-col px-4'>
                    {
                        navButtons.map(({ name, image}, index) => {
                            return (
                                <button 
                                key={name}
                                onClick={() => handleButtonClick(index)}
                                className={`flex flex-row h-[45px] rounded-[7px] pl-4 hover:text-[#fff] hover:bg-[#cccccc] ${activeButton === index? "bg-[#070f25] text-[#fff]":"text-[#a6a5a7]"}`}>
                                        <div className='flex flex-row w-[90px] justify-start h-[40px]'>
                                        <div className='flex justify-end items-center mr-1'>
                                            <img src={ image } className='w-[20px] h-[20px]'/>
                                        </div>
                                        <span className='flex justify-end items-center'> { name } </span>
                                    </div>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <button className='flex flex-row w-full pl-10'>
                <img src={signoutImg} alt='S-icon' className='w-[20px] h-[20px]'/>
                <span className='text-[#a6a5a7]'>Sign Out </span>
            </button>
        </nav>
    )
}
