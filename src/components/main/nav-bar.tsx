/*
this is a fitness app that will help you to keep track of your fitness journey all text need to be in arabic
*/
import React from 'react'
import { Button } from '../ui/button'
import MobileNavBar from './mobile-nav-bar'
import Link from 'next/link'
import { ModeToggle } from '../ui/mode'

const NavBar = () => {
    return (
        <nav
            className=' fixed top-0 border border-border/80 md:border-none  bg-transparent backdrop-blur-md max-w-6xl justify-between items-center w-full flex gap-4 px-4 py-2  z-50 '
        >
            
            <div className="flex gap-3 justify-start items-center">
                <div className="md:flex hidden gap-4 bg-white/45 dark:bg-black/30 backdrop-blur-sm text-sm rounded-lg border border-border px-4 py-2 justify-end items-center">
                    <Link
                        href='/'
                    >
                        
                            الصفحة الرئيسية
                    </Link>  
                    <Link
                        href='/about'
                    >
                        
                            حول
                    </Link>
                    <Link
                        href='/contact'
                    >
                       
                            اتصل بنا
                    </Link>
                </div>
                <ModeToggle />
                <div
                className='md:hidden flex gap-4 justify-end items-center'
                >
                    <MobileNavBar />
                </div>
            </div>
            <div className="flex gap-2 justify-start items-center font-semibold ">
            <p
                    className=' text-primary'
                >
                    FitFusion
                </p>
            <svg aria-label="Logo"
              className="flex-shrink-0 stroke-slate-700  dark:stroke-slate-50 size-8 sm:size-9"
              width="40" viewBox="0 0 600 500" fill="none"><rect x="379.447" y="43.748" width="172.095" height="418.666" rx="86.0473" strokeWidth="30"></rect><path d="M231.995 351.6L306.965 221.807L381.934 92.0154C404.822 52.3913 458.092 33.3388 500.917 49.4604C543.742 65.5819 559.905 110.773 537.018 150.397L387.079 409.981C364.191 449.605 310.921 468.657 268.096 452.536C225.271 436.414 209.108 391.224 231.995 351.6Z" strokeWidth="30"></path><path d="M278.239 272.481L278.206 272.539L278.173 272.597L201.072 408.622C180.402 445.088 131.538 462.758 92.2557 447.97C53.2008 433.268 38.461 392.055 59.3333 355.92L216.867 83.187C237.575 47.3364 285.772 30.0984 324.519 44.6849C363.283 59.2777 377.899 100.192 357.157 136.049L278.239 272.481Z" strokeWidth="30"></path></svg>
                
            </div>
        </nav>
    )
}

export default NavBar