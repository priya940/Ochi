// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Marquee() {
    motion

    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear", duration:10}}  className='text-[16vw] leading-none font-["Founders_Grotesk"] uppercase pt-10 font-semibold pr-20'>
                    we are ochi
                </motion.h1>
                <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}}  transition={{repeat:Infinity, ease:"linear", duration:10}}   className='text-[16vw] leading-none font-["Founders_Grotesk"] uppercase pt-10 font-semibold pr-20'>
                    we are ochi
                </motion.h1>
                

            </div>

        </div>
    )
}

export default Marquee