import React from 'react'
import styles, { layout } from '../style';
import artwork from "../Assets/artwork.png";

const Creator = () => {
  return (
    <section id="creator" className="flex flex-col ml-[108px] w-full">

          <div className={`${layout.sectionInfo} mb-[388px]`}>

            <h2 className="font-Metropolis font-[16px] text-[#526D81] mt-[80px] leading-10">
            CREATORS VS TROLLERS
            </h2>

            <span className="font-Karla font-bold text-[34px] text-[#148AB5] mt-[10px] align-center leading-10">
            End of an Era of<br /> Celebrity Worship
            </span>

            <p className="font-Metropolis font-normal text-[18px] text-[#FFFFFF] mt-[15px]">
            While designed simply to enable celebrity<br /> worship, the poor celebrities are bearing the<br /> brunt of trolling on social media as it stands
            </p>
            
             </div>

            <div className='absolute flex flex-col justify-left items-left ml-[398px] gap-x-[120px]'>
        <img src={artwork} alt="" className="w-[600px] h-[420px]" />
      </div>
            </section>
  )
}

export default Creator;