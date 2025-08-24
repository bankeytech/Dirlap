import React from 'react'
import Logo from '../assets/logov.svg'
import Convert from '../assets/convert1.svg'
import USDT from '../assets/usdt.svg'
import Naira from "../assets/Naira.svg"

function Home() {
  return (
    <div className='bodyground w-full p-6'>
    <header className="">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block" href="#">
            <span className="sr-only">Home</span>
            <img src={Logo} className="w-40"/>
        </a>

        {/* <!-- Centered menu links --> */}
        <div className="flex flex-1 justify-center md:justify-center">
            <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <a className="text-white border-b-2 border-violet-600 py-0.5 md:text-[1.2vw]" href="#"> Home </a>
                    </li>

                    <li>
                        <a className="text-gray-300 md:text-[1.2vw]" href="#"> Product </a>
                    </li>

                    <li>
                        <a className="text-gray-300 md:text-[1.2vw]" href="#"> Contact Us </a>
                    </li>

                    <li>
                        <a className="text-gray-300 md:text-[1.2vw]" href="#"> Terms of Services </a>
                    </li>

              
                </ul>
            </nav>
        </div>

        {/* <!-- Right aligned login/register buttons --> */}
        <div className="flex items-center">
            <div className="sm:flex sm:gap-4">
                <a className="hidden rounded-3xl bg-transparent px-8 md:px-6 py-2.5 text-sm
                 font-medium text-white transition border sm:block" href="#">
                    Login
                </a>

                <a className="hidden rounded-3xl px-8 md:px-5 bg-[linear-gradient(to_right,#351976_0%,#7746E8_100%)] py-2.5 text-sm
                 font-medium text-white transition sm:block" href="#">
                    Sign Up
                </a>
            </div>

            <button className="block rounded-sm p-2.5 text-white md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</header>

    
    <div className='hidden lg:flex flex-col items-center justify-center text-center my-30 '>
        <h1 className='text-[7vw] no-lineheight pb-2 bg-[linear-gradient(to_right,#FFFFFF_40%,#1E1E1E_100%)] 
         bg-clip-text text-transparent'>
            From Stablecoin <br /> to Spendable.
        </h1>
       
        <h4 className='font-light pt-6 text-[1.3vw] text-[#D9D9D9]'>Instant USDT-to-cash conversion. Trusted. Simple. Fast.</h4>
    </div>

      {/* Mobile */}
    <div className='flex flex-col items-start justify-center my-30 lg:hidden'>
        
        <h1 className='text-[14vw] no-lineheight pb-2 px-4 bg-[linear-gradient(to_right,#FFFFFF_40%,#1E1E1E_100%)] 
         bg-clip-text text-transparent'>
            From Stablecoin to Spendable.
        </h1>

        <h4 className='font-light pt-6 text-[18px] px-4 text-[#D9D9D9]'>
            Instant USDT-to-cash conversion <br /> Trusted. Simple. Fast.
        </h4>
    </div>

   <div className='relative flex flex-col items-center justify-center -mt-15'>
         <div className='bg-[FFFFFF]/10 backdrop-blur-xl px-6 py-8 lg:w-[35%] w-[95%] flex flex-col justify-center items-center border-[#FFFCD3]/50 border-[0.1px] rounded-3xl'>
        <div className='relative flex flex-col items-center justify-center'> 
            <div className='bg-[FFFFFF]/80 px-6 py-6 flex items-center mb-2 justify-center backdrop-blur-xl border-[#FFFCD3]/50 border-[0.1px] rounded-3xl text-white'>
                <input type="number"
                 name="" 
                 id="" 
                 placeholder='1.5'
                 className='  [&::-webkit-outer-spin-button]:appearance-none 
                 [&::-webkit-inner-spin-button]:appearance-none 
                 [&::-webkit-inner-spin-button]:m-0
                 [appearance:textfield] w-65 focus:outline-none focus:ring-0 text-white text-3xl placeholder-white'
                 />
                <div className='flex items-center justify-center border-[#FFFCD3]/50 border-[0.1px] rounded-3xl lg:p-2 p-2.5 lg:px-2 px-6 gap-2'>
                    <img src={USDT} alt="img" className='lg:w-6 w-7'/>
                    <a className='lg:text-[1vw] text-[3vw]'>USDT</a>
                </div>
            </div>
            <img src={Convert} alt="img" className='w-28 absolute z-20 ' />
            <div className='bg-[FFFFFF]/80 px-6 py-6 flex items-center justify-center backdrop-blur-xl border-[#FFFCD3]/50 border-[0.1px] rounded-3xl text-white'>
                <input type="number"
                 name="" 
                 id="" 
                 placeholder='2294.31'
                 className='  [&::-webkit-outer-spin-button]:appearance-none 
                 [&::-webkit-inner-spin-button]:appearance-none 
                 [&::-webkit-inner-spin-button]:m-0
                 [appearance:textfield] w-65 focus:outline-none focus:ring-0 text-white text-3xl placeholder-white'
                 />
                <div className='flex items-center justify-center border-[#FFFCD3]/50 border-[0.1px] rounded-3xl lg:p-2 p-2.5 lg:px-2 px-6  gap-2'>
                    <img src={Naira} alt="img" className='lg:w-6 w-7' />
                    <p className='lg:text-[1vw] text-[3vw] lg:pr-1 pr-1.5'>NGN</p>
                </div>
            </div>
        </div>
        <div className='flex text-white/90 lg:text-[0.8vw] text-[3vw] lg:gap-[17vw] gap-[30vw] mt-4'>
            <h6>
                Quote Rate
            </h6>

            <h6>
                1 USDT = 1529.54 NGN
            </h6>
        </div>

        <button className='bg-[#7746E8] w-full text-white p-4 rounded-2xl mt-10'>
            Sell USDT
        </button>
    </div>

   </div>


    </div>
  )
}

export default Home