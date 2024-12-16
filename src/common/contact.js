import React from 'react'

function Contact() {
    return (
        <div>
            <h1 className='text-[#95AAAD] Brockmann text-[45px] text-center'>Schedule a <span className='text-[#00FFFC]'> Free Demo</span>, and <span className='text-[#8BC542]'> Go Live <br /> in just 7 days </span> </h1>
            <p className='text-[#95AAAD] text-center Gilroy py-6'>Experience Seamless Warranty Management Like Never Before</p>
            <p className='Brockmann text-white text-2xl text-center'>How we can help you?</p>
            <div className='grid grid-cols-12 gap-4 my-5'>
                <div className='col-span-4'>
                    <div className='relative p-12 border border-[#104649] rounded-lg'>
                        <div className='text-[#00FFFC] bg-[#104649] py-3 px-4 absolute top-0 left-0 rounded-ss-lg rounded-ee-lg'>
                            <p>01</p>
                        </div>
                        <p className='text-white Brockmann text-lg'>Fill this form</p>
                        <p className='text-[#8E8E8E] Gilroy'>Share your details with us, and <br /> our team will reach out within <br /> 48 hours to guide you through <br /> the next steps.</p>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='relative p-12 border border-[#104649] rounded-lg'>
                        <div className='text-[#00FFFC] bg-[#104649] py-3 px-4 absolute top-0 left-0 rounded-ss-lg rounded-ee-lg'>
                            <p>02</p>
                        </div>
                        <p className='text-white Brockmann text-lg'>Schedule a free demo</p>
                        <p className='text-[#8E8E8E] Gilroy'>Our experts will walk you through <br /> the platform, explaining its features <br /> and how it can address your <br /> specific needs.</p>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='relative p-12 border border-[#104649] rounded-lg'>
                        <div className='text-[#00FFFC] bg-[#104649] py-3 px-4 absolute top-0 left-0 rounded-ss-lg rounded-ee-lg'>
                            <p>03</p>
                        </div>
                        <p className='text-white Brockmann text-lg'>Go live in 7 days</p>
                        <p className='text-[#8E8E8E] Gilroy'>Get up and running quickly! Our streamlined onboarding ensures your warranty operations are automated and optimized in just one week.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
