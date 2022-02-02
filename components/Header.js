import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <header className='pl-6 pr-3 py-5 sm:px-16 flex justify-between items-center
                         bg-white shadow border fixed top-0 left-0 right-0 z-50'>
                <Link aria-label="PluralForms" aria-current="page" href="/" >

                    PluralForms
                </Link>
                <nav className="bg-yellow-900 text-white p-2 tracking-wider text-sm sm:text-lg tracking-wide
                                rounded-lg hover:bg-gray-800 font-medium cursor-pointer ">
                    <Link aria-label="PluralForms" aria-current="page"
                        href="/"  >
                        Get started — it&apos;s free
                    </Link>
                </nav>
            </header>
            <div className='h-5 sm:h-20'></div>
        </>
    )
};

export default Header;
