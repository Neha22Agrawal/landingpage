import React from 'react'
import styles, {layout} from '../style';
import kyc from "../Assets/kyc.png";
import rectangle from "../Assets/rectangle.png";
import avtar from "../Assets/avtar.png";
import icon from "../Assets/icon.png";
import rectangle65 from "../Assets/rectangle65.png";
import user4 from "../Assets/user4.png";
import speaker from "../Assets/speaker.png";
import voice from "../Assets/voice.png";
import security from "../Assets/security.png";




const Kyc = () => {
  return (
    <section id="kyc" className={`${layout.section}  w-[1440px] h-[995px]  px-6`}>
      <div className={`${layout.sectionInfo} mb-36 mt-20`}>
        <h2 className="w-[365px] h-[24px] font-Avenir font-[16px] text-[#526D81]">
        VERIFIED USERS<br className="font-Avenir font-[16px] text-[#526D81]"/>
        </h2>
        <span className={`${styles.paragraph} font-karla font-bold font-[32px] text-[#57D9A3] max-w-[424px] mt-2`}>
        CitizenU: <br />Be Equally Influential
        </span>
        <p className={`${styles.paragraph} font-Avenir font-[18px] text-[#FFFFFF] mt-2`}>
        A social network of the people, by the<br /> people and for the people shall not perish<br /> from the Earth!
        </p>
        </div>

      <div className='flex flex-row justify-left items-left ml-96 mb-96 px-20 absolute'>
        <img src={rectangle} alt="" className='w-[624px] h-[440px]'/>
        <img src={kyc} alt="" className="w-[664px] h-[458px] py-8 px-8 mt-4 absolute" />
        <img src={security} alt="" className='w-[181px] h-[304px] ml-96 mt-48 absolute ' />
      </div>

      
       <div className='flex flex-row gap-x-4'> 

      <div class="w-[348px] h-[309px] bg-[#09263A] rounded-[16px] mt-32 bg-shadow-xl ">
      <div class="flex flex-col items-center pb-10">
      <img src={rectangle65} alt="" className='w-[70px] h-[64px] border border-[#09263A] shdaow-md rounded-l mt-4 '/>
        <img src={avtar} alt="" className='w-[70px] h-[64px] border border-[#09263A] shdaow-md rounded-l mt-4 absolute '/>
        <h2 className='font-karla font-Extrabold font-[24px] text-[#FFFFFF] mt-4'>One Person</h2>
        <span className='font-Avenir font-Regular font-[16px] text-[#96A2AF] align-center mt-4'>Lorem ipsum dolor sit amet<br /> consectetur. Mauris at diam</span>
        </div>
      </div>

      <div class="w-[348px] h-[309px] bg-[#09263A] rounded-[16px] mt-32 bg-shadow-xl dark:bg-gray-800">
      <div class="flex flex-col items-center pb-10">
      <img src={rectangle65} alt="" className='w-[70px] h-[64px] border border-[#09263A] shdaow-md rounded-l mt-4 '/>
        <img src={user4} alt="" className=' w-[52px] h-[52px] shdaow-md rounded-l mt-6 absolute'/>
        <h2 className='font-karla font-Extrabold font-[24px] text-[#FFFFFF] mt-4'>One Account</h2>
        <span className='font-Avenir font-Regular font-[16px] text-[#96A2AF] align-center mt-4'>Lorem ipsum dolor sit amet<br /> consectetur. Mauris at diam</span>
        </div>
      </div>

      <div class="w-[348px] h-[309px] bg-[#09263A] rounded-[16px] mt-32 bg-shadow-xl dark:bg-gray-800">
      <div class="flex flex-col items-center pb-10 ">
        <img src={rectangle65} alt="" className='w-[70px] h-[64px] border border-[#09263A] shdaow-md rounded-l mt-4 '/>
        <img src={voice} alt="" className='w-[39px] h-[50px]  mt-6 absolute'/>
        <h2 className='font-karla font-Extrabold font-[24px] text-[#FFFFFF] mt-4'>One Voice</h2>
        <span className='font-Avenir font-Regular font-[16px] text-[#96A2AF] align-center mt-4'>Lorem ipsum dolor sit amet<br /> consectetur. Mauris at diam</span>
        </div>
      </div>




      </div>

    </section>
  )
}

export default Kyc;