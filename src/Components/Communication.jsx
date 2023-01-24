import React from 'react'
import styles, { layout } from '../style';
import rectangle63 from "../Assets/rectangle63.png";

const Communication = () => {
    return (
        <section id="communication" className={`${layout.section} w-full `}>

          <div className={`${layout.sectionInfo} mt-[70px] ml-[108px]`}>

            <h2 className="font-Metropolis text-[16px] text-[#526D81]">
            REAL LIFE 1:1 COMMUNICATION
            </h2>

            <span className="font-Karla font-bold text-[34px] leading-10 text-[#FFFFFF] mt-[10px] align-center">
            Scammed on Social Media?<br/><font className="text-[#148AB5]"> Verify, Interact, Follow or <br/>Block only verified user<br/> accounts</font>
            </span>

            <p className="font-Metropolis font-normal text-[18px] text-[#FFFFFF] mt-[19px]">
            Ghost accounts interact with themselves. Unable to<br /> affect Statistical Metrics or your Peace of Mind from<br/> beyond the veil of un-verifiable anonymity.
            </p>

            </div>  

            <div className='absolute flex flex-col justify-left items-left mb-96 ml-[548px]'>
               
               <img src={rectangle63} alt="" className="pl-[30px] w-[570px] h-[440px]" />
                     
                 </div>
            </section>
  )
}

export default Communication;