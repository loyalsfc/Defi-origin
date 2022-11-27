import React from 'react'
import logo from '../../assets/crpylogo.webp'

function Header() {
    return (
        <header className='md:absolute top-0 left-0 w-full z-20'>
            <div className='flex items-center justify-between max-w-[1140px] mx-auto'>
                <div className='w-1/2 md:w-fit py-2.5'>
                    <img src={logo} alt="logo" className='mx-auto' />
                </div>
                <nav className='hidden md:block'>
                    <ul className='text-lg font-medium'>
                        <li className='nav'>Home</li>
                        <li className='nav'>Select Wallet</li>
                        <li className='nav'>About Us</li>
                        <li className='nav'>Contact Us</li>
                    </ul>
                </nav>
                <a className='md:hidden' href="#">
                    <i className="fa-brands fa-google-wallet text-[25px] p-2.5 hover:text-[#ffbf7c]"></i>
                </a>
            </div>
        </header>
    )
}

export default Header
