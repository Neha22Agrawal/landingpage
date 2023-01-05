import React from 'react'
import styles, {layout} from '../style';
import map from "../Assets/map.png";

const Stories = () => {
  return (
    <section id="stories" className={`${layout.section}  w-full px-6`}>
        <div className='flex flex-col justify-items-start mb-96'>
        <img src={map} alt="" className="w-[624px] h-[440px]" />
      </div>

      <div className={`absolute ml-80 mb-36 mt-20 `}>
            <h2 className="w-[348px] h-[24px] font-Avenir font-Regular font-[16px] text-[#526D81] ml-96">
            REAL STORIES VS FAKE TRENDS
            </h2>
            <span className={`${styles.paragraph} font-Karla font-bold font-[34px] text-[#FFFFFF] max-w-[424px] mt-1 align-center ml-96`}>
            Influencer Influenza! <br/><font className="text-[#148AB5] ml-96"> Get immunised today! <br/></font>
            </span>
            <p className={`${styles.paragraph} font-Avenir font-Regular font-[18px] text-[#FFFFFF] mt-4 ml-96`}>
            Ghost accounts interact with themselves. Unable to<br/>affect Statistical Metrics or your Peace of Mind from<br/> beyond the veil of un-verifiable anonymity.
            </p>
            </div>

        </section>
  )
}

export default Stories