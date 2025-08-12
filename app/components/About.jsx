import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'text-white' : ''}`}>
            <motion.h4 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }} className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-gray-300' : ''}`}>Introduction</motion.h4>
            <motion.h2 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none '>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }} className='flex-1'>
                    <p className={`mb-10 max-w-2xl ${isDarkMode ? 'text-gray-300' : ''}`}>Aspiring Java Developer with a strong foundation in object-oriented programming, database management, and full-stack
                        development. Experienced in building desktop applications using Swing, JDBC, and MySQL. Passionate about software
                        development and continuously improving problem-solving skills through coding platforms. </p>

                    <motion.ul initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }} className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li whileHover={{ scale: 1.05 }} className={`border-[0.5px] rounded-xl p-6 cursor-pointer duration-500 hover:-translate-y-1 ${isDarkMode ? 'border-gray-600 hover:bg-gray-800 hover:shadow-xl shadow-gray-900' : 'border-gray-400 hover:bg-[#fcf4ff] hover:shadow-2xl shadow-black'}`} key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className={`my-4 font-semibold text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                                <p className={isDarkMode ? 'text-gray-300' : ''}>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }} className={`my-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tools I use</motion.h4>
                    <motion.ul initial={{opacity:0 }}
        whileInView={{opacity:1}}
        transition={{duration:0.6 , delay:1.5}} className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li whileHover={{scale:1.1}} className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-400 hover:bg-gray-100'}`} key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About