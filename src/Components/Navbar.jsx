import SignUpDialog from './SignUpDialog';
import banner1 from "../Assets/banner1.png";
import toung from "../Assets/toung.png";

const Navbar = () => {
  
  return (
    <>
<div className='-z-10 flex justify-center'>

        <img alt='landingpage banner' src={banner1} width={1440} height={852}/>

        <div className='absolute top-60'>

          <img alt='tongue' src={toung} width={700} height={557} />
          <div className='absolute top-52 text-center'>

            <h4 className='font-Karla text-[48px] font-extrabold leading-[58px] tracking-tight text-white'>
              Trust only
            </h4>

            <h2 className='font-Karla text-[72px] font-extrabold leading-[72px] tracking-tight text-[#F4EFDF]'>
              Verified!
            </h2>

            <p className='font-regular ml-auto mr-auto mt-3 w-[50%] text-center font-Metropolis text-xl leading-6 text-white'>
              Designed with the power of One Person-One Vote, so every word of
              reality matters.<br/> Join the real revolution!
            </p>

          </div>
        </div>
      </div>
      
    </>

       
    
   
  );
};

export default Navbar;