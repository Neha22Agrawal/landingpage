import React from 'react';
import styles from '../style';
import graph from "../Assets/graph.png";


const Statistics = () => {  
  return (
    <div className='flex flex-col items-center justify-center ml-auto mr-auto px-[178px] bg-[#0B2146] '>
        <h2 className='font-Metropolis font-bold text-[30px] text-[#FFAE43] items-center mt-[98px]'>
        STATISTICAL ANALYSIS 101 :
        </h2>
        <span className='font-Karla text-[25px] font-normal text-[#FFFFFF] align-center'>
        The subject of Statistical Analysis primarily considers <font className="font-bold">4 Types</font> of Data: 
        </span>

        <div className='flex flex-row justify-center items-center'>
        <img src={graph} alt="" className='items-center justify-center w-[1088px] '/>
        </div>

        <p className='font-Karla text-[25px] font-Semibold text-[#FFFFFF] mb-[109px] mt-4'>
            and then there is data, driven by bots, sock-puppets, and invisible Social Media<br /><font className="ml-20">users running a skewer through Statistical Analysis.</font> 
            </p>
    </div>
  )
  };

export default Statistics;