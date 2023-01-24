import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-[65px] ml-[30px]'>
        <h2 className='font-Karla font-bold text-[40px] align-center text-center text-[#FFFFFF] '>
        A Statistician and a Social Media Trend Analyst <br/>walk into a Bar, together!<br/>
        <font className="font-Karla font-bold text-[42px] text-[#FF5630]">That’s the JOKE!</font>
        </h2>
        <p className='font-Metropolis text-[18px] font-Regular text-[#C1CED0] text-center mt-[19px]'>
        Sign up today so that future Climate Archeologists can access  your real-time reactions and suggestions to<br/> global political failure at various levels in the mismanagement of the Environmental Crisis and other currently<br/> brewing and easily avoidable Social and Humanitarian Disasters.
        </p>

        <div className='flex flex-row items-center mt-[31px] gap-x-2 mb-[102px]'>
            <input type="Name" name="Name" id='Name' placeholder='Name' className='w-[338px] h-[56px] bg-[#10293A] rounded-[8px] border border-[1px] border-[#688295] text-Avenir text-[18px] align-left px-3' />
            <button className='w-[180px] h-[56px] border border-[1px] border-[#148AB5] rounded-[10px] bg-[#148AB5] font-Metropolis font-semibold text-[16px] text-[#FFFFFF]'>Sign up to CitizenU</button>

        </div>

    </div>
  )
}

export default Signup