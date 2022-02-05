import Link from 'next/link';
import React from 'react';

const Power = () => {
    return (
        <div className='py-8 px-4 sm:px-16 flex flex-col space-y-6 sm:space-y-2 text-center'>
            <p className='text-5xl tracking-tight sm:tracking-wide capitalize  '>Use PluralForms, create classic forms.</p>

            <p className='tracking-wider'>You don&apos;t need need our permission to create that form
                and ask your people those burning questions.
            </p>
            <div>
                <Link passHref={true} href="https://app.pluralforms.com">
                    <a aria-label="Try PluralForms" className="pf text-white hover:bg-yellow-600 focus:ring-4
                                     focus:ring-yellow-300 text-lg 
                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                    dark:focus:ring-yellow-900">
                        Try it out
                    </a>
                </Link>


            </div>

        </div>
    )
};

export default Power;
