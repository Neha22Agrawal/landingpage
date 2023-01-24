import React from 'react'

const SignUpDialog = () => {
  return (
    <div className='signup-dialog-shadow relative z-50 -mt-[70px] ml-auto mr-auto flex h-[158px] w-[716px] flex-col justify-center rounded-[80px] bg-[#F4EFDF] text-center'>
        <h3 className='items-center font-Metropolis text-[32px] font-semibold leading-9 tracking-tight'>
        Be the change you want to see
      </h3>
      
        <button className='flex rounded-lg bg-[#148AB5] ml-auto mr-auto px-[18.5px] py-4 w-[200px] h-[56px] justify-center mt-4 font-Metropolis text-base font-semibold text-white'>
          Sign up to CitizenU
        </button>
      </div>
    
  )
}

export default SignUpDialog;