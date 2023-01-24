import React from 'react'
import styles, {layout} from '../style';
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import banner from "../Assets/banner.png";

const Testinomials = () => {
  return (
  
    <section id="footer" className={`${layout.section}  w-[1440px] h-[372px]  ml-[108px]`}>
    <div className='flex w-full justify-start items-start '>
        <div className='flex flex-col '>
        <h2 className='font-Karla text-[32px] font-extrabold text-[#79B7DD]  '>
        For the Real <br/>community
        </h2>
        <div className='flex group gap-x-[21px] mt-[24px]'>
            <img src={twitter} alt="" className='w-[28px] h-[28px] cursor-pointer ' />
            <img src={instagram} alt="" className='w-[28px] h-[28px] cursor-pointer' />
            <img src={facebook} alt="" className='w-[28px] h-[28px] cursor-pointer'/>
        </div>
        </div>

        <div className='flex flex-col group gap-y-[31px] mt-[15px] ml-[84px]'>
            <h2 className='font-Metropolis font-normal text-[16px] text-[#79B7DD]'>PRODUCT</h2>
            <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] cursor-pointer'>Download</span>
            <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] cursor-pointer'>Features</span>
        </div>

        <div className='flex flex-col group gap-y-[31px] mt-[15px] ml-[114px]'>
            <h2 className='font-Metropolis font-normal text-[16px] text-[#79B7DD]'>POLICIES</h2>
            <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] cursor-pointer'>Terms</span>
            <span className='font-Metropolis font-normal text-[16px] text-[#96A2AF] cursor-pointer'>Safety</span>
        </div>

        </div>
        
    <div className='flex flex-col'>
      <div className='border-center mt-[42px] border w-[1020px] border-[1px] border-[#F4EFDF]'>

      </div>
      <div className='flex flex-row gap-x-96'>
      <img src={banner} alt="" className='mt-[30px]'/>
      <span className='mt-[49px] ml-[139px] font-Avenir font-medium font-[16px] text-[#FFFFFF] items-end justify-end ml-[177px]'>Copyright © 2022 CitizenU. All rights reserved.</span>
      </div>
    </div>
    
  </section>
    
    
  )
}

export default Testinomials;