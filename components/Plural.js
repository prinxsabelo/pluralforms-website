import React from 'react';
import Image from 'next/image'

const Plural = () => {
    return (
        <>
            <h1 className='sr-only'>Welcome to PluralForms</h1>
            <section className='px-4 sm:px-16 flex  flex-col lg:flex-row flex-col-reverse lg:w-full 
                                overflow-y-hidden lg:items-center lg:justify-between  sm:gap-16 
                            '>
                <div className='w-full lg:w-1/2 sm:pr-16' >
                    <div className='lg:max-w-2xl lg:max-auto space-y-2 '>
                        <h1 className=' h1 font-bold text-4xl capitalize w-full sm:w-9/12 tracking-wider'>
                            Plural Forms for Plural Thoughts
                        </h1>

                        <p className="tracking-widest" >
                            It is easy to create forms as fast as you like, anywhere even with your mobile phone.
                            <br className='hidden sm:flex' />
                            <span className='sm:hidden'> </span>
                            Version 1 of the best african form builder.
                            No login, No hassle
                        </p>

                        <button aria-label="Start Building"
                            className='bg-gray-800 px-8 py-2 rounded-lg focus:ring-yellow-300 focus:ring-4
                             text-yellow-100 text-xl tracking-wider  hover:bg-yellow-600 font-medium rounded-lg'>
                            Start Building
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2 relative '>
                    <Image src='/cover.svg' width="100%" height="100%" layout="responsive" objectFit="contain"
                        alt="cover" priority="true" />
                </div>
            </section>
        </>
    )
};

export default Plural;
