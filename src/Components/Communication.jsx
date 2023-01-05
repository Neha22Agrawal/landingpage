import React from 'react'
import styles, { layout } from '../style';
import rectangle63 from "../Assets/rectangle63.png";

const Communication = () => {
    return (
        <section id="communication" className={`${layout.section}  w-full px-6`}>
          <div className={`${layout.sectionInfo} mb-36 mt-20 `}>
            <h2 className="w-[348px] h-[24px] font-Avenir font-[16px] text-[#526D81]">
            REAL LIFE 1:1 COMMUNICATION
            </h2>
            <span className={`${styles.paragraph} font-karla font-bold font-[34px] text-[#FFFFFF] max-w-[424px] mt-1 align-center`}>
            Scammed on Social Media?<br/><font className="text-[#148AB5]"> Verify, Interact, Follow or <br/>Block only verified user accounts</font>
            </span>
            <p className={`${styles.paragraph} font-Avenir font-Regular font-[18px] text-[#FFFFFF] mt-4`}>
            The Environmental Crisis unfolds even as seemingly<br /> powerful change enabling tools, like Social Media,<br /> generate random and arbitrary trending topics of<br/> zero real world value!
            </p>
            </div>

          
            <div className='absolute flex flex-col justify-left items-left mb-96 ml-96 px-20'>
        <img src={rectangle63} alt="" className="w-[624px] h-[440px]" />
      </div>
            </section>
  )
}

export default Communication