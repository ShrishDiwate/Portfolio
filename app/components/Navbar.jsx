import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef =  useRef();

    const openMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
      window.addEventListener('scroll', ()=> {
        if(scrollY > 50){
            setIsScroll(true)
        }else{
        setIsScroll(false)
        }
      })
    }, [])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden '>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? (isDarkMode ? "bg-black/50 backdrop-blur-lg" : "bg-white/50 backdrop-blur-lg shadow-sm") : ""}`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 cursor-pointer mr-14'/>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm ${isDarkMode ? 'bg-white/10 backdrop-blur-sm text-white' : 'bg-white'}`}>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#top">Home</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#about">About me</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#services">Services</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#work">My work</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button onClick={()=> setIsDarkMode(prev => !prev)} className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
            </button>

            <a className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-colors ${isDarkMode ? 'border-gray-400 text-white hover:bg-white/10' : 'border-gray-500 hover:bg-gray-100'}`} href="#contact">
                Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
            </a>

            <button className='block md:hidden ml-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
            </button>
        </div>

        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-60 z-50 h-screen transition duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-rose-50'}`}>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='cursor-pointer w-5'/>
            </div>
            <li><a className='font-Ovo hover:text-purple-400 transition-colors' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo hover:text-purple-400 transition-colors' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo hover:text-purple-400 transition-colors' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo hover:text-purple-400 transition-colors' onClick={closeMenu} href="#work">My work</a></li>
            <li><a className='font-Ovo hover:text-purple-400 transition-colors' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar