import React from 'react'

import { FaPlay, FaMusic } from 'react-icons/fa';
import { IoIosPulse } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useEffect, useState} from 'react';
import { fetchSongs } from '../api/music';




function Home() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
 
  useEffect(() => {
    async function loadSongs() {
      const data = await fetchSongs();
      setSongs(data);
    };
    loadSongs();
  }, []);

  return (
    <div className=' min-h-screen  bg-[#050510]'>
      <div className='relative flex justify-center items-center overflow-hidden bg-[#050510]'>
    <div className='absolute w-full flex justify-center items-center z-0 pointer-events-none overflow-hidden'>
      <svg viewBox='0 0 1600 400' className='w-[1400px] h-[320px] opacity-80'>
        <defs>
          <linearGradient id='waveGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#ff00ff' />
            <stop offset='50%' stopColor='#b026ff' />
            <stop offset='100%' stopColor='#00e5ff' />
          </linearGradient>
          <filter id='glow'>
            <feGaussianBlur stdDeviation='6' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <path d='M0 200 L60 200 L80 180 L100 230 L120 160 L140 300 L160 120 L180 260 L200 90 L220 330 L240 130 L260 290 L280 100 L300 210
        L380 200 L420 170 L460 210 L500 160 L540 120 L580 260 L620 80 L660 320 L700 110 L740 260 L780 70 L820 340 L860 100 L900 250 L940 150
        L1020 200 L1060 170 L1100 230 L1140 150 L1180 90 L1220 300 L1260 120 L1300 250 L1340 100 L1380 210 L1420 160 L1460 200 L1600 200' fill='none' stroke='url(#waveGradient)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round' filter='url(#glow)' className='wave-animation'></path>
      </svg>
    </div>
    <div className='relative z-100 flex items-center justify-center'>
      <div className='absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px]'></div>
      <div className='absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]'></div>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-[10%] left-[15%] w-16 h-16 border border-cyan-400/30 rotate-12 animate-pulse'></div>
        <div className='absolute bottom-[20%] left-[10%] w-24 h-24 border border-pink-500/20 rotate-45'></div>
        <div className='absolute top-[25%] right-[15%] w-20 h-20 border border-purple-500/30 rotate-12'></div>
      </div>
      /* main content */
      <div className='relative z-20 flex flex-col items-center justify-center text-center z-10'>
        <h1 className='text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_#ff00ff]'>Afrowave</h1>
        <p className='text-gray-400 max-w-[500px] mb-16 text-sm md:text-lg'>Feel the rhythm. Experience futuristic bass vibrations.</p>
        /*speaker*/
        <div className='relative z-20 flex justify-center items-center z-20'>
          <motion.div animate={{scale: [1, 1.08, 1],}} transition={{duration: 1.5, repeat: Infinity,}} className='absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-pink-500/20 shadow-[0_0_80px_#ff00ff]'></motion.div>
          <motion.div animate={{scale: [1, 1.15, 1],}} transition={{duration: 2, repeat: Infinity,}} className='absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-cyan-400/10'></motion.div>
          <motion.div animate={{scale: [1, 1.04, 1],}} transition={{duration: 0.8, repeat: Infinity,}} className='relative z-10 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-br from-[#111] to-[#000] border-[12px] border-[#1f1f35] flex justify-center items-center shadow-[0_0_60px_#8b00ff]'>
                                  
              <div className='w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-gradient-to-br from-[#1c1c30] to-black border-[10px] border-[#2d2d50] flex justify-center items-center'>
                <motion.div animate={{scale: [1, 1.2, 1],}} transition={{duration: 0.5, repeat: Infinity,}} className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 shadow-[0_0_20px_#ff00ff]'></motion.div>
            </div>  
          </motion.div>
        </div>
        <div className='mt-20 flex gap-6 flex-wrap justify-center'>
          <button className='px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center gap-3 shadow-[0_0_30px_#ff00ff] hover:scale-105 transition'>
            <FaPlay />
            Play Now
          </button>
          <button className='px-8 py-4 rounded-full border border-cyan-400/30 text-cyan-300 flex items-center gap-3 hover:bg-cyan-400/10 transition'>
            <FaMusic />
            Explore Beats
          </button>
        </div>
      </div>
    </div>
    </div>

    <div className='mt-10 w-full '>
      <div>
      <h2 className='text-2xl font-bold text-white mb-6'>Trending Songs</h2>
      <div className='relative overflow-hidden'>
        
      <div className='w-full ' >
      <div className='flex gap-6 py-2  pb-4' >
        {songs.map(song => (
          <div key={song.id} className='bg-gray-800/50 backdrop-blur-sm border  border-cyan-400/30 rounded-lg p-6 hover:bg-cyan-400/10 min-w-[220px] max-w-[220px] h-[340px] flex-shrink-0 hover:scale-[1.02] transition' >
            <img src={song.image} alt={song.title} className='w-full h-auto rounded-md mb-4' />
            <h3 className='text-lg font-bold text-white'>{song.title}</h3>
            <p className='text-gray-400'>{song.artist}</p>
            <button onClick={() => setCurrentSong(song.audio)} className='w-full py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition cursor-pointer'>
              Play
            </button>
          </div>
        ))}
        
      </div>
      </div>
 
      </div>

 
    </div>
    {currentSong && (
      <audio src={currentSong} autoPlay controls className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-lg border border-cyan-400/30 rounded-full p-2 shadow-lg z-50' />
    )}
    </div>
    </div>
  )
}

export default Home