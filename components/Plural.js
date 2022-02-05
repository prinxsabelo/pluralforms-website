import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const coverSVG = 'https://ik.imagekit.io/xc4qx4w3wyr/cover_AeqzfYEr7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644073142626';
const Plural = () => {
    return (
        <>
            <h1 className='sr-only'>Welcome to PluralForms</h1>
            <section className='px-4 pb-4 sm:pb-2  sm:px-16 flex  flex-col lg:flex-row flex-col-reverse lg:w-full 
                                overflow-y-hidden lg:items-center lg:justify-between  sm:gap-16 
                            '>
                <div className='w-full lg:w-1/2 sm:pr-16' >
                    <div className='lg:max-w-2xl lg:max-auto  '>
                        <h1 className=' h1 font-bold text-4xl capitalize w-full sm:w-9/12 tracking-wider'>
                            Plural Forms for Plural Thoughts
                        </h1>

                        <p className="tracking-widest my-6 text-base sm:text-lg" >
                            Version 1 of the best Africa form builder.
                            Completely blended for you to create forms<span className='sm:hidden'>.</span> <span className='hidden sm:inline'> and get detailed analysis. </span>  <br className='hidden sm:flex' />
                            No login, No hassle. <span className='font-semibold'>PluralForms is free</span>
                        </p>

                        <Link aria-label="Start Building" href="https://app.pluralforms.com">
                            <a className='bg-gray-800 px-8 py-2 rounded-lg focus:ring-yellow-300 focus:ring-4 mt-2
                             text-yellow-100 text-xl tracking-wider  hover:bg-yellow-600 font-medium rounded-lg'>   Start Building</a>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-1/2 relative '>
                    <Image src={`${coverSVG}`} width="100%" height="100%" placeholder='blur' blurDataURL={`${coverSVG}`}
                        layout="responsive" objectFit="contain"
                        alt="cover" priority="true" />
                </div>
            </section>
        </>
    )
};

export default Plural;
