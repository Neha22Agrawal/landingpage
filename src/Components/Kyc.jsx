import React from 'react'
import kycb from "../Assets/kycb.png";
import security from "../Assets/security.png";
import onep from "../Assets/onep.png";
import onei from "../Assets/onei.png";
import onef from "../Assets/onef.png";

const Kyc = () => {
  return (
    <>
    
    <div className="flex flex-col w-[1440px] h-[960px] mr-auto ml-auto ">

      <div className="flex flex-col justify-center items-start ml-[108px] mt-[205px]">
        <h2 className="font-Metropolis text-[16px] text-[#526D81]">
        VERIFIED USERS<br className="font-Metropolis text-[16px] text-[#526D81]"/>
        </h2>
        <span className="font-Karla text-[32px] letter-spacing-[-0.02em] font-bold text-[#57D9A3] mt-[10px]">
        CitizenU: <br />Be Equally Influential
        </span>
        <p className=" font-Metropolis text-[18px] text-[#FFFFFF] mt-[15px]">
        A social network of the people, by the <br /> people and for the people shall not perish<br /> from the Earth!
        </p>
        </div>

      <div className='flex flex-row justify-left items-left ml-96 mb-96 ml-[490px] mt-[55px] absolute'>
        
        <img src={kycb} alt="" className="w-[624px] h-[440px]"/> 
        <img src={security} alt="" className='w-[181px] h-[304px] ml-[403px] mt-[160px] absolute'/>
      </div>

      
       <div className='flex flex-row gap-x-[20px] ml-[108px]'> 

      <div class="bg-[#09263A] opacity-0.05 rounded-[16px] mt-[166px] bg-shadow-xl border-radius-[16px] ">
      <div class="flex flex-col items-center">
      <img src={onep} alt="" className='border border-[#09263A] rounded-l mt-[40px] '/>
        
        <h2 className='font-Karla font-extrabold text-[24px] text-[#FFFFFF] mx-[108px] mt-[40px]'>One Person</h2>
        <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] align-center mx-[42px] mt-[16px] my-[62px]'>Lorem ipsum dolor sit amet<br /> consectetur. Mauris at diam</span>
        </div>
      </div>

      <div class="bg-[#09263A] opacity-0.05 rounded-[16px] mt-[166px] bg-shadow-xl border-radius-[16px]">
      <div class="flex flex-col items-center">
      <img src={onei} alt="" className='border border-[#09263A] rounded-l mt-[40px] '/>
        
        <h2 className='font-Karla font-extrabold text-[24px] text-[#FFFFFF] mx-[108px] mt-[40px]'>One Account</h2>
        <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] align-center mx-[42px] mt-[16px] my-[62px]'>Lorem ipsum dolor sit amet<br /> consectetur. Mauris at diam</span>
        </div>
      </div>

      <div class="bg-[#09263A] opacity-0.05 rounded-[16px] mt-[166px] bg-shadow-xl border-radius-[16px]">
      <div class="flex flex-col items-center">
        <img src={onef} alt="" className='border border-[#09263A] rounded-l mt-[40px] '/>
        
        <h2 className='font-Karla font-extrabold text-[24px] text-[#FFFFFF] mx-[108px] mt-[40px]'>One Voice</h2>
        <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] align-center mx-[42px] mt-[16px] my-[62px]'>Lorem ipsum dolor sit amet<br /> consectetur. Mauris at diam</span>
        </div>
      </div>

      </div>
      </div>
</>
    
  );
};

export default Kyc;