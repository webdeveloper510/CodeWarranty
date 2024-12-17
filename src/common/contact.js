import React from 'react'
import Input from './input'

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

            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <Input placeholder='Enter'
                        type='text'
                        label='Full Name' />
                </div>
                <div className='col-span-6'>
                    <Input placeholder='Enter'
                        type='text'
                        label='Last Name' />
                </div>
                <div className='col-span-6'>
                    <Input placeholder='Enter'
                        type='email'
                        label='Email ID' />
                </div>
                <div className='col-span-6'>
                    <Input placeholder='Enter'
                        type='tel'
                        label='Phone No.' />
                </div>
                <div className='col-span-12'>
                    <p className='Gilroy text-white'>Product Name*</p>
                    <div className='grid grid-cols-12 gap-0 my-4'>
                        <div className='col-span-3'>
                            <div className=''>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#104649] bg-transparent' />
                                <label for="vehicle1" className='text-[#00FFFC] Gilroy'> CodeWarranty Catalog</label>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className=''>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='accent-[#104649] bg-transparent' />
                                <label for="vehicle2" className='text-[#00FFFC] Gilroy'> CodeWarranty Warranty</label>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='accent-[#104649] bg-transparent' />
                                <label for="vehicle3" className='text-[#00FFFC] Gilroy'> CodeWarranty Manual</label>
                            </div>
                        </div>
                        <div className='col-span-3'></div>
                        <div className='col-span-3'>
                            <div className=''>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#104649] bg-transparent' />
                                <label for="vehicle1" className='text-[#00FFFC] Gilroy'> CodeWarranty Desk</label>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div >
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='accent-[#104649] bg-transparent' />
                                <label for="vehicle2" className='text-[#00FFFC] Gilroy'> CodeWarranty RMS</label>
                            </div>
                        </div>
                        <div className='col-span-3'></div>
                        <div className='col-span-3'></div>
                    </div>
                </div>
                <div className='col-span-12'>
                    <div className="relative rounded-lg border border-[#104649]">
                        <label
                            htmlFor="description"
                            className=" text-[#00FFFC] Brockmann text-sm absolute top-4 left-4"
                        >
                            Description of inquiry
                        </label>
                        <textarea
                            id="description"
                            rows="4"
                            name="description"
                            maxLength={150}
                            className="resize-none block px-4 pb-4 pt-8 w-full text-base outline-none font-medium rounded-lg bg-[transparent] appearance-none peer placeholder-[#fff] text-[#fff]"
                        ></textarea>
                    </div>
                </div>

                <div className='col-span-12 text-center py-10'>
                    <button className='text-[#000] text-base bg-[#00FFFC] Brockmann rounded-lg px-12 py-4 uppercase'>Send Message</button>
                </div>
            </div>
        </div >
    )
}

export default Contact
