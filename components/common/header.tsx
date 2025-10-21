import React from 'react'
import NavLink from './nav-link'
import { FileTextIcon } from 'lucide-react';

function Header() {
    const isLogged = false;
    return (
        <nav className='bg-transparent backdrop-blur-sm fixed top-0 w-full z-50 py-3 flex justify-between items-center px-2 lg:px-8'>
            <div className='flex gap-2 lg:gap-1 text-sm lg:text-base items-center'>
                <FileTextIcon size={20} className='hover:transform hover:rotate-12 transition-all ease-in-out ' />
                <p className='text-sm lg:text-base font-bold'>ReelRead</p>
            </div>

            <div className='flex gap-2 lg:gap-3 text-sm lg:text-base'>
                <NavLink href="/#pricing">Pricing</NavLink>
                {isLogged && <NavLink href="/your-summaries">Your Summaries</NavLink>}
            </div>
            <div className='flex gap-2 lg:gap-3 text-sm lg:text-base'>
                {
                    !isLogged ? (<NavLink href='/sign-in'>Sign In</NavLink>) : (<p>KM</p>)
                }
            </div>
        </nav>
    )
}

export default Header