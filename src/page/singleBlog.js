import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import profile from '../assets/images/profile.png'
import blog from '../assets/images/blog/blog (9).png'
import Contact from '../common/contact'

function SingleBlog() {
    return (
        <div className='bg-[#002025]'>
            <div className='w-large mx-auto'>
                <Header />

                <div className='grid grid-cols-12 gap-4 mt-12'>
                    <div className='col-span-3 pl-12'>
                        <div className='flex justify-start'>
                            <img src={profile} alt='profile image' className='mr-3 w-[50px] h-[50px]' />
                            <div>
                                <p className='text-white font-semibold text-lg text-left'>John Eve</p>
                                <p className='text-[#00FFFC] Brockmann text-left'>Nov 17, 2020</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-9'>
                        <h3 className='text-white text-3xl Brockmann'>Step-by-Step Guide: How to Check Your Samsung Warranty Online. ______</h3>

                        <p className='text-white mt-5 w-[80%] Gilroy text-base'>When purchasing a laptop, one crucial aspect to consider is the duration of the warranty that comes with it. The laptop warranty period is the span of time during which the manufacturer agrees to take responsibility.</p>
                    </div>
                </div>
            </div>
            <img src={blog} alt='blog' className='mx-auto my-8' />

            <div className='w-large mx-auto'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 pl-12'>
                        <p className='text-white mt-5 text-left mx-auto Gilroy text-base'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            <br />
                            <br />
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>

                    </div>
                </div>
            </div>
            <div id='contactUs'></div>
            <div className='py-8 w-large mx-auto'>
                <Contact />
            </div>
            <div className='w-large mx-auto'>
                <Footer />
            </div>
        </div>
    )
}

export default SingleBlog
