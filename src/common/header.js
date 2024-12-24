import React from 'react'
import Logo from "../assets/images/logo.png"
import Menu from '../assets/images/menu.png'
function Header() {
    return (
        <>
            <div className='p-6'>
                <div className='grid lg:grid-cols-12 md:grid-cols-7 sm:grid-cols-7 s:grid-cols-7 gap-4'>
                    <div className='col-span-3'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='col-span-5 lg:block md:hidden sm:hidden s:hidden'></div>
                    <div className='col-span-4'>
                        <div className='border-[#104649] border md:flex sm:hidden s:hidden justify-between rounded-[10px] lg:w-[77%] md:w-full sm:w-full ml-auto'>
                            <button className='text-[#95AAAD] px-5 my-3 '>Services</button>
                            <button className='text-[#95AAAD] border-[#104649] px-5 my-3 border-l'>Blogs</button>
                            <button className='text-[#00FFFC] bg-[#104649] px-4 py-3 rounded-e-[7px]'>Contact Us</button>
                        </div>
                        <div className='md:hidden sm:block s:block ml-auto max-w-fit'>
                            <img src={Menu} alt='Menu' />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Header
