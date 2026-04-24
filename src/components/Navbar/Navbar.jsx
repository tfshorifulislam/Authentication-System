
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 p-5 mx-auto'>
            <div>
                <h1>
                    Logo
                </h1>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-10'>
                    <Link href={'/'}
                        className='cursor-pointer'>
                        Home
                    </Link>
                    <Link href={'/model'}
                        className='cursor-pointer'>
                        Model
                    </Link>
                    <Link href={'/about'}
                        className='cursor-pointer'>
                        About
                    </Link>
                </ul>
            </div>
            <div>
                <Link href={'/signup'}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Navbar;