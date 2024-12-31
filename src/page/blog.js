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
import { Helmet } from 'react-helmet'
function Blog() {
    return (
        <>
            <Helmet>
                <title>Best Warranty Management Software | Streamline Claims and Warranty Operations</title>
                <meta name="description" content="Best Warranty Management Software | Streamline Claims and Warranty Operations" />
            </Helmet>
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
                            <Link to={'/blog/single-blog'}>
                                <img src={BlogImage1} className='w-full' alt='Blog Post 1' />
                                <p className='text-[#00FFFC] Brockmann mt-8'>Dec 30, 2024</p>
                                <h2 className='text-[#fff] text-xl Brockmann mb-3 font-[500]'>Key Features to Look for in a Warranty Management Platform
                                </h2>
                                <p className='text-[#95AAAD] Gilroy leading-tight mb-3 pr-8'>The reputation of any business runs not only with the services or products it offers but also on its honour to fulfil commitments. But what if a business has a good number of customers? Won’t it be difficult to manage and track the promises and guarantees offered? Here comes the importance of warranty management software. Before we discuss the features of warranty software , let’s give a short analogy of how warranty management software works.

                                </p>

                                <div className='my-5'>
                                    <Link to={'/blog/single-blog'}>
                                        <img src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />
                                    </Link>
                                </div>
                            </Link>
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

                <div className='py-8 w-large mx-auto' id='contactUs'>
                    <Contact />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Blog
