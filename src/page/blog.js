import React from 'react'
import Footer from '../common/footer'
import Header from '../common/header'

import BlogImage from '../assets/images/blog/blog (9).png'
import BlogImage1 from '../assets/images/blog/blog (8).png'
import BlogImage2 from '../assets/images/blog/blog (7).png'
import BlogImage3 from '../assets/images/blog/blog (6).png'
import BlogImage4 from '../assets/images/blog/blog (5).png'
import BlogImage5 from '../assets/images/blog/blog (4).png'
import BlogImage6 from '../assets/images/blog/blog (3).png'
import BlogImage7 from '../assets/images/blog/blog (2).png'
import BlogImage8 from '../assets/images/blog/blog (1).png'
import Arrow from '../assets/images/blog/arrow.png'
import leftArrow from '../assets/images/blog/leftArrow.png'
import { Link } from 'react-router-dom'
import Contact from '../common/contact'
function Blog() {
    return (
        <>
            <div className='bg-[#002025] bg-headerBackground1 bg-contain bg-no-repeat'>
                <div className='w-large mx-auto'>
                    <Header />
                    <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6 gap-4 py-8'>
                        <div className='col-span-3 lg:block md:hidden sm:hidden s:hidden'></div>
                        <div className='col-span-6'>
                            <h1 className='text-[#95AAAD] Brockmann text-3xl text-center'><span className='text-[#00FFFC]'> Blogs </span></h1>
                            <p className='text-[#95AAAD] text-center Gilroy py-6 w-2/3 mx-auto'>Keeping you up to date with the latest updates, announcements, and articles concerning warranty technology and the industry.</p>
                        </div>
                        <div className='col-span-3 lg:block md:hidden sm:hidden s:hidden'></div>
                    </div>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 s:grid-cols-1 gap-4 mt-8'>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Can You Buy a Warranty for the PS5 After Purchase?</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>Gaming consoles have become a cornerstone of modern entertainment, providing hours of immersive gameplay
                                and interactive experiences. When purchasing a high-end console
                                like the PlayStation.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage1} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>How Long Is the Typical Laptop Warranty Period?</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>When purchasing a laptop, one crucial aspect to consider is the duration of the warranty that comes with it. The laptop warranty period is the span of time during which the manufacturer agrees to take responsibility.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage2} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Are Extended Warranties for Laptops Worth It? </h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>In today’s technology-driven world, laptops have become indispensable tools for work, communication, entertainment, and education. As with any significant investment, protecting your laptop
                                from potential</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage3} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Best Insurance for Used and Refurbished Smartphone</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>In a world where smartphones have become indispensable tools for communication, productivity, and entertainment, many people are seeking cost-effective alternatives to brand new devices. Used and refurbished cell phones offer a practical.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage4} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>T-Mobile Phone Insurance: What’s Covered and What’s Not</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>In our tech-centric world, smartphones have become indispensable tools for communication, work, and entertainment. But accidents happen, and devices can get damaged or lost, leaving us
                                stranded and stressed.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage5} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Top Refrigerator Warranties to Secure Your Appliance</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>Your refrigerator is the heart of your kitchen, keeping your food fresh and your family nourished. However, unexpected breakdowns can be a major inconvenience and financial burden. That’s where a reliable refrigerator warranty comes to the rescue.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage6} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Extended Warranties for TVs: Are They a Wise Investment?</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>The world of electronics has witnessed remarkable advancements in recent years, and one of the most sought-after gadgets is the television. Televisions have evolved from simple black-and-white displays to sleek, high-definition screens.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage7} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Step-by-Step Guide: How to Check Your Samsung Warranty Online</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>Congratulations on owning a Samsung product! As a proud owner, you’d naturally want to protect your gadget and ensure it’s covered by a warranty. Fortunately, Samsung makes it easy for customers to check their warranty.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-[#082B30] p-4 rounded-[14px]'>
                            <img src={BlogImage8} className='w-full' alt='Blog Post 1' />
                            <p className='text-[#00FFFC] Brockmann mt-8'>Nov 17, 2020</p>
                            <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Why do you need a Knowledge Base? Here’s why our customers</h2>
                            <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>In today’s technology-driven world, our reliance on electronic devices has skyrocketed. Protecting these devices from unexpected damage or malfunctions has become increasingly important. Electronics protection plans.</p>

                            <div className='my-5'>
                                <Link to={'/blog/single-blog'}>
                                    <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-4 s:grid-cols-4 gap-4 py-8'>
                        <div className='col-span-4 lg:block md:hidden sm:hidden s:hidden'></div>
                        <div className='col-span-4'>
                            <div className='flex justify-around'>
                                <img src={leftArrow} className='w-[60px] h-[60px] cursor-pointer' alt='Left Arrow' />
                                <p className='self-center text-[#00FFFC] Brockmann cursor-pointer'>01</p>
                                <p className='self-center text-[#95AAAD] Brockmann cursor-pointer'>02</p>
                                <p className='self-center text-[#95AAAD] Brockmann cursor-pointer'>03</p>
                                <p className='self-center text-[#95AAAD] Brockmann cursor-pointer'>04</p>
                                <p className='self-center text-[#95AAAD] Brockmann cursor-pointer'>05</p>
                                <img src={Arrow} className='w-[60px] h-[60px] cursor-pointer' alt='Right Arrow' />
                            </div>
                        </div>
                        <div className='col-span-4'></div>
                    </div>
                </div>

                <div id='contactUs'></div>
                <div className='py-8 w-large mx-auto'>
                    <Contact />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Blog
