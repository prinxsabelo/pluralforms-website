import React from 'react';
import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className='my-8'>
            <div>
                <p className='text-center capitalize font-medium text-3xl py-2 sm:py-4 px-2'>
                    PluralForms works its magic for you.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row px-4 sm:px-16 sm:space-x-6 space-y-4 sm:space-y-0 justify-between mb-7'>
                <div className='w-full sm:w-1/3 flex flex-col items-center text-center p-4 card border space-y-2 relative'>
                    <div className='w-48 h-48'>
                        <Image src='/create.svg' width="100%" height="100%" layout="responsive" objectFit="contain" alt='Create Form' />
                    </div>
                    <p className=' font-medium tracking-wider'>
                        Create Form
                    </p>
                    <p className='tracking-wider sm:text-base '>
                        Super easy to create and generate opinions using PluralForms.
                    </p>
                </div>

                <div className='w-full sm:w-1/3 flex flex-col items-center text-center p-4 card border space-y-2 relative'>
                    <div className='w-48 h-48'>
                        <Image src='/share.svg' width="100%" height="100%" layout="responsive" objectFit="contain" alt="Share form " />
                    </div>

                    <p className=' font-medium'>
                        Share Form
                    </p>
                    <p className='tracking-wider sm:text-base '>
                        Simple to share your forms anywhere with your family, friends, colleagues.
                    </p>
                </div>
                <div className='w-full sm:w-1/3 flex flex-col items-center text-center p-4 card border space-y-2 relative'>
                    <div className='w-48 h-48'>
                        <Image className='w-96 h-48' src='/report.svg' width="100%" height="100%" layout="responsive" objectFit="contain" alt="Analyze form" />
                    </div>

                    <p className=' font-medium'>
                        Analyze Form
                    </p>
                    <p className='tracking-wider sm:text-base '>
                        You recieve detailed analysis of how users interact with your form
                    </p>
                </div>
            </div>
        </div>
    )
};

export default HowItWorks;
