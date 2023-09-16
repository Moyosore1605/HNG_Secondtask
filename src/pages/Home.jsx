import React from 'react'
import Navbar from '../components/Navbar'
import imdb from '../assets/imdb.png'
import tomato from '../assets/tomato.png'
import {AiFillPlayCircle} from 'react-icons/ai'

export default function Home() {
    return (
        <main className='bgMain h-[530px] w-full pt-6 ps-10 pe-10'>
            <Navbar/>
            <div className='flex flex-col text-white w-[300px]'>
                <h1 className='text-5xl font-medium mb-5'>John Wick 3 : <br/> Parabellum</h1>
                <section className='mb-5 flex'>
                    <img className='me-1 w-fit-content' src={imdb} alt="" />
                    <span>86.0/100</span>
                    <img className='ms-4 me-1' src={tomato} alt="" />
                    <span>97%</span>
                </section>
                <p className='text-sm'>John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button className='flex bg-red-700 mt-5 items-center w-[170px] rounded p-2 space-x-3'>
                    <AiFillPlayCircle/>
                    <span className='text-sm'>WATCH TRAILER</span>
                </button>
            </div>
        </main>
)
}
