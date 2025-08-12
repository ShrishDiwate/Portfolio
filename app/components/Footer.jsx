import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className={`mt-10 ${isDarkMode ? 'text-white' : ''}`}>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto '>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 mx-auto mb-2' />
            <span className={isDarkMode ? 'text-gray-300' : ''}>shreediwate500@gmail.com</span>
        </div>
      </div>
        <div className={`text-center sm:flex items-center justify-between border-t mx-[10%] mt-12 py-6 ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>
            {/* <p className={isDarkMode ? 'text-gray-300' : ''}>© 2025 Shrish Diwate. All rights reserved.</p> */}
            <ul className='flex items-center gap-10  justify-center mt-4 sm:mt-0'>
                
                <li><a target='_blank' href="https://leetcode.com/u/ShrishDiwate/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'hover:text-purple-600'} transition-colors`}>LeetCode</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/shrish-diwate/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'hover:text-purple-600'} transition-colors`}>LinkedIn</a></li>
                <li><a target='_blank' href="https://github.com/ShrishDiwate" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'hover:text-purple-600'} transition-colors`}>Github</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer