import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'text-white' : ''}`}>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-gray-300' : ''}`}>What I offer</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl'>My services</motion.h2>
            <motion.p initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${isDarkMode ? 'text-gray-300' : ''}`}>Java Developer specializing in object-oriented programming, database management, and full-stack development.
                Committed to creating robust applications and continuously improving technical skills.</motion.p>

            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index} className={`border rounded-lg px-8 py-12 cursor-pointer duration-500 hover:-translate-y-1 ${isDarkMode ? 'border-gray-600 hover:bg-gray-800 hover:shadow-xl shadow-gray-900' : 'border-gray-400 hover:bg-[#fcf4ff] hover:shadow-2xl shadow-black'}`}>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className={`text-lg my-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-sm leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
                        <a href="{link}" className={`flex items-center gap-2 text-sm mt-5 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'hover:text-purple-600'} transition-colors`}>
                            Read more <Image alt='' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow} className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services