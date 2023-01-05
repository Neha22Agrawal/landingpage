import React from 'react'
import styles, { layout } from '../style';
import rectangle65 from "../Assets/rectangle65.png";

const Creator = () => {
  return (
    <section id="creator" className={`${layout.section}  w-full px-6 `}>
          <div className={`${layout.sectionInfo} mb-36 mt-20 `}>
            <h2 className="w-[348px] h-[24px] font-Avenir font-[16px] text-[#526D81]">
            CREATORS VS TROLLERS
            </h2>
            <span className={`${styles.paragraph} font-Karla font-bold font-[34px] text-[#FFFFFF] max-w-[424px] mt-1 align-center`}>
            End of an Era of<br /> Celebrity Worship
            </span>
            <p className={`${styles.paragraph} font-Avenir font-Regular font-[18px] text-[#FFFFFF] mt-4`}>
            While designed simply to enable celebrity<br /> worship, the poor celebrities are bearing the<br /> brunt of trolling on social media as it stands
            </p>
            </div>

            <div className='absolute flex flex-col justify-left items-left mb-96 ml-96 px-20'>
        <img src={rectangle65} alt="" className="w-[624px] h-[440px]" />
      </div>
            </section>
  )
}

export default Creator