import React from 'react'
import styles, {layout} from '../style';
import map from "../Assets/map.png";

const Stories = () => {
  return (
    <section id="stories" className={`${layout.section} w-full`}>
        <div className='flex flex-col justify-items-start mb-96 ml-[108px] mt-[77px]'>
        <img src={map} alt="" className='w-[524px] h-[440px] ' />
      </div>

      <div className="absolute mb-36 mt-[140px] ml-[270px]">
            <h2 className="font-Metropolis font-normal text-[16px] text-[#526D81] ml-96">
            REAL STORIES VS FAKE TRENDS
            </h2>
            <span className="font-Karla font-bold text-[34px] text-[#FFFFFF] mt-[10px] align-center ml-96">
            Influencer Influenza! <br/><font className="text-[#148AB5] ml-96"> Get immunised today! <br/></font>
            </span>
            <p className="font-Metropolis font-normal text-[18px] text-[#FFFFFF] mt-[8px] ml-96">
            The Environmental Crisis unfolds even as seemingly<br/>powerful change enabling tools, like Social Media,<br/> generate random and arbitrary trending topics of <br/> zero real world value!
            </p>
            </div>

        </section>
  )
}

export default Stories;