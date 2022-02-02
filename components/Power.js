import React from 'react';

const Power = () => {
    return (
        <div className='p-2 py-8 sm:px-16 flex flex-col space-y-4 sm:space-y-2 '>
            <p className='text-5xl tracking-tight sm:tracking-wide capitalize '>Use PluralForms, create classic forms.</p>
            <p className='text-3xl tracking-tight text-yellow-900 leading-tight font-bold w-full'>
                PluralForms notifications let you know when you have new form responses too.
            </p>
            <div>
                <button aria-label="Try PluralForms" type="button" className="bg-gray-900 text-white  hover:bg-yellow-600 focus:ring-4
                                     focus:ring-yellow-300 text-lg
                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                    dark:focus:ring-yellow-900">
                    Try it out
                </button>

            </div>

        </div>
    )
};

export default Power;
