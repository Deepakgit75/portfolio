import React from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

const Hero = ({userData}) => {
    return (
        <div>
            <section id='hero' className="relative items-center justify-center gap-1 pb-32 pt-20">
                <div className='flex flex-row container '>
                    <div className='flex flex-col w-[50%] gap-6 justify-center items-start'>
                        <h1 className='font-medium text-4xl text-[#343D68] '> Hi! {userData.about.name}</h1>
                        <p className='mt-0 w-[70%] text-sm text-[#343D68] text-justify indent-8 italic '> <BiSolidQuoteAltLeft /> {userData.about.quote}</p>
                        <h2 className=' font-extrabold text-[#343D68] text-5xl'>I am a <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{userData.about.title}</span> </h2>
                        <p className='mt-4 w-[70%] font-medium text-sm text-justify '>{userData.about.subTitle}</p>
                        <p className='mt-4 w-[70%] font-medium text-sm text-justify text-gray-700'>{userData.about.description}</p>
                    </div>
                    <div className='relative w-[50%] flex justify-center items-center '>
                        <img src={userData.about.avatar.url} alt="Profile"
                            className='user-image ' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
