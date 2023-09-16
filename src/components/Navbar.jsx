import React from 'react'
import tv from '../assets/tv.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
export default function Navbar() {
    return(
        <main className='flex justify-between items-center text-white mb-20'>
            <div className='flex items-center space-x-3'>
                <img src={tv} alt="" />
                <h1 className='text-2xl font-medium'>MovieBox</h1>
            </div>
            <div className='relative w-[500px]'>
                <input placeholder='What do you want to watch?' className='bg-transparent border-white rounded searchbar w-full'/>
                <AiOutlineSearch className='absolute right-3 top-3' />
            </div>
            <div className='flex items-center space-x-4'>
                <h4 className='font-medium'>Sign in</h4>
                <HiOutlineMenuAlt4 className='p-2 rounded-full bg-red-700 w-[36px] h-[36px]'/>
            </div>
        </main>
)
}
