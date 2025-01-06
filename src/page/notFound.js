import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/images/404-error-page-templates.jpg'

function NotFound() {
    return (
        <div>
            <Link to={'/'}>
                <img src={Image} alt='404 Image' className='mx-auto h-screen' />
            </Link>
        </div>
    )
}

export default NotFound
