import React from 'react'
import styles, {layout} from '../style';
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import banner from "../Assets/banner.png";

const Testinomials = () => {
  return (
  
    <section section id="kyc" className={`${layout.section}  w-[1440px] h-[372px]  px-6`}>
    <div className='flex w-full justify-start items-start mt-4 '>
        <div className='flex flex-col '>
        <h2 className='font-Karla text-[32px] font-extrabold text-[#79B7DD] '>
        For the Real <br/>community
        </h2>
        <div className='flex group gap-x-6 mt-4'>
            <img src={twitter} alt="" className='w-[28px] h-[28px] cursor-pointer ' />
            <img src={instagram} alt="" className='w-[28px] h-[28px] cursor-pointer' />
            <img src={facebook} alt="" className='w-[28px] h-[28px] cursor-pointer'/>
        </div>
        </div>

        <div className='flex flex-col group gap-y-4 mt-6 ml-24'>
            <h2 className='w-[75px] h-[19px] font-Avenir font-medium text-[16px] text-[#79B7DD]'>PRODUCT</h2>
            <span className='w-[75px] h-[19px] font-Avenir font-medium text-[16px] text-[#96A2AF] cursor-pointer'>Download</span>
            <span className='w-[75px] h-[19px] font-Avenir font-medium text-[16px] text-[#96A2AF] cursor-pointer'>Features</span>
        </div>

        <div className='flex flex-col group gap-y-4 mt-6 ml-24'>
            <h2 className='w-[68px] h-[19px] font-Avenir font-medium text-[16px] text-[#79B7DD]'>POLICIES</h2>
            <span className='w-[43px] h-[19px] font-Avenir font-medium text-[16px] text-[#96A2AF] cursor-pointer'>Terms</span>
            <span className='w-[44px] h-[19px] font-Avenir font-medium text-[16px] text-[#96A2AF] cursor-pointer'>Safety</span>
        </div>

        </div>
        
    <div className='flex flex-col'>
      <div className='w-[1085px] borde-center mt-6 border border-[1px] border-[#F4EFDF]'>

      </div>
      <div className='flex flex-row gap-x-96'>
      <img src={banner} alt="" className='w-[117px] h-[57px] mt-4'/>
      <span className='w-full h-[19px] mt-6 font-Avenir font-medium font-[16px] text-[#FFFFFF] items-end justify-end ml-60'>Copyright © 2022 CitizenU. All rights reserved.</span>
      </div>
    </div>
    
  </section>
    
    
  )
}

export default Testinomials;