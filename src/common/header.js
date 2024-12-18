import React from 'react'
import Logo from "../assets/images/logo.png"
import Banner from '../assets/images/Group12.png'
function Header() {
    return (
        <>
            <div className='p-6'>
                <div className='grid lg:grid-cols-12 md:grid-cols-7 sm:grid-cols-7 gap-4'>
                    <div className='col-span-3'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='col-span-5 lg:block md:hidden sm:hidden'></div>
                    <div className='col-span-4'>
                        <div className='border-[#104649] border flex justify-between rounded-[10px] lg:w-[77%] md:w-full sm:w-full ml-auto'>
                            <button className='text-[#95AAAD] px-5 my-3 '>Services</button>
                            <button className='text-[#95AAAD] border-[#104649] px-5 my-3 border-l'>Blogs</button>
                            <button className='text-[#00FFFC] bg-[#104649] px-4 py-3 rounded-e-[7px]'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-0 pb-8'>
                <div className='col-span-2'></div>
                <div className='lg:col-span-8 md:col-span-12 s:col-span-12 pt-5 px-6'>
                    <h1 className='text-center text-white text-[55px] leading-none	Brockmann'><span className='text-[#00FFFC]'>Transform</span> Your <span className='text-[#00FFFC]'>Business</span> with Advanced <span className='text-[#00FFFC]'>Warranty</span> <span className='text-[#00FFFC]'>  SaaS Solutions </span></h1>
                    <p className='text-white text-xl text-center py-5 Gilroy'>Effortless Warranty Management Tailored for Growth</p>
                    <div className='grid grid-cols-12 gap-3'>
                        <div className='col-span-4 border-r pr-3'>
                            <p className='text-right text-lg pl-8 leading-1 Gilroy text-white'>Empowered by InsureTech and Built for Compliance</p>
                        </div>
                        <div className='col-span-8 flex self-center Gilroy'>
                            <p className='text-[#95AAAD]'>Optimize your warranty operations with our smart and scalable software, designed to enhance efficiency, reduce costs, and deliver exceptional customer experiences.</p>
                        </div>
                    </div>
                    <div className='text-center py-5'>
                        <button className="bg-[#8BC542] Gilroy uppercase py-4 px-6 rounded-md text-white font-medium">Book A Demo</button>
                    </div>
                    <img src={Banner} alt="banner" className='mx-auto' />
                </div>
                <div className='col-span-2'></div>
            </div>
        </>

    )
}

export default Header
