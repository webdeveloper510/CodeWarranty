import React from 'react'
import Logo from "../assets/images/logo.png"
import Menu from '../assets/images/menu.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
function Header() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = 50;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };


    return (
        <>
            <div className='py-6 '>
                <div className='grid lg:grid-cols-12 md:grid-cols-7 sm:grid-cols-7 s:grid-cols-7 gap-4'>
                    <div className='col-span-3'>
                        <Link to={'/'}> <img src={Logo} alt="logo" /> </Link>
                    </div>
                    <div className='col-span-5 lg:block md:hidden sm:hidden s:hidden'></div>
                    <div className='col-span-4'>
                        <div className='md:flex sm:hidden s:hidden lg:w-[77%] md:w-full sm:w-full ml-auto justify-end'>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#00FFFC] bg-[#104649] border-[#104649] px-5 py-3 rounded-s-[7px] border'
                                        : 'text-[#95AAAD] hover:text-[#00FFFC] hover:bg-[#104649] border-[#104649] px-5 py-3 rounded-s-[7px] border'
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#00FFFC] bg-[#104649] border-[#104649] px-5 py-3 border'
                                        : 'text-[#95AAAD] hover:text-[#00FFFC] hover:bg-[#104649] border-[#104649] px-5 py-3 border'
                                }
                            >
                                Blogs
                            </NavLink>
                            <a
                                className='text-[#95AAAD] cursor-pointer border-[#104649] hover:text-[#00FFFC] hover:bg-[#104649] border px-4 py-3 rounded-e-[7px]'
                                onClick={() => scrollToSection('contactUs')}
                            >
                                Contact Us
                            </a>
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
