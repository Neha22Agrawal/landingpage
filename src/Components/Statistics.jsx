import React from 'react';
import styles from '../style';
import wave from "../Assets/wave.png";
import normal from "../Assets/normal.png";
import discrete from "../Assets/discrete.png";
import ordinal from "../Assets/ordinal.png";
import continuous from "../Assets/continuous.png";
import wave1 from "../Assets/wave1.png";

const Statistics = () => {  
  return (
    <div className='flex flex-col items-center justify-center w-[1084px] h-[395px] ml-14 px-6 '>
        <h2 className='font-Avenir-Next font-bold weight-[600] font-[30px] text-[#FFAE43] items-center'>
        STATISTICAL ANALYSIS 101 :
        </h2>
        <span className='font-karla font-[42px] font-Semibold text-[#FFFFFF]'>
        The subject of Statistical Analysis primarily considers <font className="font-bold">4 Types</font> of Data: 
        </span>

        <div className='flex flex-row justify-left items-left'>
        <img src={wave} alt="" className="w-[700px] h-[178px] border-[#79B7DD] mt-2"/>
        <img src={wave} alt="" className="w-[700px] h-[178px] border-[#79B7DD] mt-2 pl-56 absolute"/>
        
        
        </div>

        <div className='flex gap-x-16 absolute'>
        <img src={normal} alt="" className='w-[99px] h-[39px] mb-4'/>
        <img src={ordinal} alt="" className='w-[100px] h-[39px]'/>
        <img src={discrete} alt="" className='w-[108px] h-[39px]'/>
        <img src={continuous} alt="" className='w-[151px] h-[39px]'/>
        </div>

        <p className='font-karla font-[42px] font-Semibold text-[#FFFFFF] mt-2'>
            and then there is data, driven by bots, sock-puppets, and invisible Social Media<br /><font className="ml-20">users running a skewer through Statistical Analysis.</font> 
            </p>
    </div>
  )
  };

export default Statistics;