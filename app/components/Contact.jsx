import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4fe213f4-0413-4707-a304-b675e00cd7d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
      <motion.h4
      initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.3, delay:0.5}}
      className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Connect with me</motion.h4>
            <motion.h2 
            initial={{y:-20,opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.5}}
            className={`text-center text-5xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Get in touch</motion.h2>

            <motion.p 
            initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.7}}
            className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>I'd love to hear from you! If you have any comments, questions or feedback, please use the form below.</motion.p>
            
            <motion.form
            initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.9, delay:0.5}}
            onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-1 gap-6 mt-10 mb-8'>
              <motion.input 
              initial={{x:-50,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.6, delay:1.1}}
                type="text" 
                placeholder='Enter your name' 
                required 
                className={`w-full p-4 outline-none border-2 rounded-xl transition-all duration-300 focus:scale-105 ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-purple-500 focus:bg-gray-700' : 'border-gray-300 bg-white focus:border-purple-500 focus:shadow-lg'}`} 
                name='name'
              />
              <motion.input 
              initial={{x:50,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.6, delay:1.1}}
                type="email" 
                placeholder='Enter your Email' 
                required 
                className={`w-full p-4 outline-none border-2 rounded-xl transition-all duration-300 focus:scale-105 ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-purple-500 focus:bg-gray-700' : 'border-gray-300 bg-white focus:border-purple-500 focus:shadow-lg'}`} 
                name='email'
              />
              <motion.textarea 
              initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay:1.3}}
                name="message" 
                id="" 
                rows={6} 
                placeholder='Enter your message' 
                required 
                className={`w-full p-4 outline-none border-2 rounded-xl mb-6 transition-all duration-300 focus:scale-105 resize-none ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-purple-500 focus:bg-gray-700' : 'border-gray-300 bg-white focus:border-purple-500 focus:shadow-lg'}`}
              ></motion.textarea>
              <motion.button 
              
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
                type='submit' 
                className={`py-4 px-10 w-max flex items-center justify-center gap-3 text-white rounded-full mx-auto cursor-pointer duration-300 transform hover:scale-105 font-semibold shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'}`}
              >
                Submit <Image src={assets.right_arrow_white} alt='' className='w-4'  /> 
              </motion.button>
              </div>
              <p className={`m-4 text-center font-semibold ${result.includes('Successfully') ? (isDarkMode ? 'text-green-400' : 'text-green-600') : result.includes('Sending') ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-red-400' : 'text-red-600')}`}>{result}</p>
            </motion.form>
    </motion.div>
  )
}

export default Contact