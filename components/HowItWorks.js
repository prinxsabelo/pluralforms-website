import React from 'react';
import Image from 'next/image'

const createSVG = 'https://ik.imagekit.io/xc4qx4w3wyr/create_PFL17v9UD.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644073188215';
const shareSVG = 'https://ik.imagekit.io/xc4qx4w3wyr/share_8OFdKo_HS.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644073223605';
const reportSVG = 'https://ik.imagekit.io/xc4qx4w3wyr/report_SEnyXKjsAv.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644073223871';
const HowItWorks = () => {
    return (
        <div className='my-8'>
            <div>
                <p className='text-center capitalize font-medium text-3xl py-2 sm:py-4 px-2'>
                    PluralForms works its magic for you.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row px-4 sm:px-16 sm:space-x-8 space-y-4 sm:space-y-0 justify-between mb-7'>
                <div className='w-full sm:w-1/3 flex flex-col items-center text-center p-4 card border space-y-2 relative'>
                    <div className='w-10/12 block'>
                        <Image src={`${createSVG}`}
                            width="100%" height="100%" placeholder='blur' layout="responsive" objectFit="contain"
                            blurDataURL={`${createSVG}`}
                            alt='Create Form' />
                    </div>
                    <p className='font-semibold tracking-wider'>
                        Create Form
                    </p>
                    <p className='tracking-wider sm:text-base '>
                        Super easy to create and generate opinions using PluralForms.
                    </p>
                </div>

                <div className='w-full sm:w-1/3 flex flex-col items-center text-center p-4 card border space-y-2 relative'>
                    <div className='w-10/12 block'>
                        <Image src={`${shareSVG}`} width="100%" height="100%" layout="responsive"
                            blurDataURL={`${shareSVG}`} objectFit="contain" alt="Share form " />
                    </div>

                    <p className='font-semibold tracking-wider'>
                        Share Form
                    </p>
                    <p className='tracking-wider sm:text-base '>
                        Simple to share your forms anywhere with your family, friends, colleagues.
                    </p>
                </div>
                <div className='w-full sm:w-1/3 flex flex-col items-center text-center p-4 card border space-y-2 relative'>
                    <div className='w-10/12 block'>
                        <Image src={`${reportSVG}`} width="100%" height="100%"
                            blurDataURL={`${reportSVG}`} layout="responsive" objectFit="contain" alt="Analyze form" />
                    </div>

                    <p className='font-semibold tracking-wider'>
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
