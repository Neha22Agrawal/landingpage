import { useState } from "react";
import banner from "../Assets/banner.png";
import asset1 from "../Assets/asset1.png";
import asset2 from "../Assets/asset2.png";
import asset3 from "../Assets/asset3.png";
import banner1 from "../Assets/banner1.png";
import toung from "../Assets/toung.png";
import frame67 from "../Assets/frame67.png";


const Navbar = () => {
  
  return (
    
<nav className="w-full flex  justify-between items-center navbar ">
      <div className="flex flex-col justify-center items-center w-full">
        <img src={banner1} alt="" className="w-[1440px] h-[852px]"/>
        <img src={toung} alt="" className="w-[720px] h-[557px] mt-40 absolute "/>
        <h1 className="w-[216px] font-Karla text-[38px] font-extrabold text-[#FFFFFF] mt-48 ml-12 absolute ">
        Trust only</h1>
        <span className="w-[281px] font-karla font-extrabold text-[48px] text-[#F4EFDF] mt-72 ml-20 absolute ">
        Verified!
        </span>
      
        <p className="w-[391px] font-Avenir font-roman text-[20px] text-[#FFFFFF] mt-96 pt-16 ml-20 absolute ">
        Designed with the power of One Person-<br/>One Vote, so every word of reality matters.<br /> Join the real revolution!
        </p>
        <img src={frame67} alt="" className="w-[616px] h-[176px] mt-96 absolute"/>
        
        
        
      </div>
      
      

      </nav>

       
        
   
  );
};

export default Navbar;