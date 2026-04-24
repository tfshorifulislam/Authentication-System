'use client'
import { authClient, signOut } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const {
        data: session,
    } = authClient.useSession()

    console.log(session)
    const user = session?.user

    const signOut = () => {

        authClient.signOut()
    }
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
            <div className='flex items-center gap-5'>
                <Link href={'/signup'}>
                    Sign Up
                </Link>
                <Link href={'/signin'}>
                    Sign In
                </Link>
                <div>
                    {
                        user?.name
                    }
                </div>
                <Button variant='danger' onClick={signOut} >Logout</Button>

            </div>
        </div>
    );
};

export default Navbar;