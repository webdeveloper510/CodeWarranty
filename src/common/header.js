import React from 'react'
import Logo from "../assets/images/logo.png"

function Header() {
    return (
        <div className='p-6'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-3'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='col-span-5'></div>
                <div className='col-span-4'>
                    <div className='border-[#104649] border flex justify-between rounded-[10px]'>
                        <button className='text-[#95AAAD] px-5 py-3 '>Services</button>
                        <button className='text-[#95AAAD] px-5 py-3 mx-auto'>Blogs</button>
                        <button className='text-[#00FFFC] bg-[#104649] px-4 py-3 rounded-e-[7px]'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
