import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <header className='pl-3 sm:pl-6 pr-1 sm:pr-3 py-3 sm:px-16  flex justify-between items-center
                         bg-white shadow border fixed top-0 left-0 right-0 z-50 '>
                <Link aria-label="PluralForms" aria-current="page" href="https://www.pluralforms.com" passHref={true} >
                    <a className='text-2xl flex items-center tracking-wide sm:px-8'>
                        <Image src="/plural.svg" width="25" height="25" alt="logo" objectFit="contain" />
                        PluralForms
                    </a>

                </Link>
                <nav >
                    <Link aria-label="PluralForms"
                        href="https://app.pluralforms.com" passHref={true} >
                        <a className="pf p-2 text-white focus:ring-yellow-300 focus:ring-4  tracking-wider text-sm sm:text-lg tracking-wide 
                                rounded-lg  hover:bg-yellow-600  hover:text-white 
                                font-medium cursor-pointer block truncate">
                            Get started <span className='hidden sm:inline-block'> — it&apos;s free </span>
                        </a>
                    </Link>
                </nav>
            </header>
            <div className='h-5 sm:h-20'></div>
        </>
    )
};

export default Header;
