import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
    return (
        <div className={`w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ${isDarkMode ? 'text-white' : ''}`}>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-32 ' />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo'>Hi! I'm Shrish Diwate <Image src={assets.hand_icon} alt='' className=' w-6' /></motion.h3>

            <motion.h1 initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Java developer | Software developer</motion.h1>

            <motion.p initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }} className={`max-w-2xl mx-auto font-Ovo ${isDarkMode ? 'text-gray-300' : ''}`}>Java Developer focused on building enterprise-grade applications using Spring Boot, REST APIs, and database integration.
                Committed to writing maintainable code and staying current with industry best practices. </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }} href="#contact" className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors ${isDarkMode ? 'border-white bg-white text-black hover:bg-gray-200' : 'border-white bg-black text-white hover:bg-gray-800'}`}>
                    contact me <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt='' className='rounded-full w-4' />
                </motion.a>
                <motion.a initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }} href="/sample-resume.pdf" download className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors ${isDarkMode ? 'border-gray-400 text-white hover:bg-white/10' : 'border-gray-500 hover:bg-gray-100'}`}>
                    My resume <Image src={assets.download_icon} alt='' className={`rounded-full w-4 ${isDarkMode ? 'filter invert' : ''}`} />
                </motion.a>
            </div>
        </div>
    )
}

export default Header