import React from 'react';
import Easy from './Easy';
import HowItWorks from './HowItWorks';
import Impress from './impress';
import Plural from './Plural';
import Power from './Power';
const Main = () => {
    return (
        <main className='flex flex-col flex-1 leading-relaxed'>
            <Plural />
            <Easy />
            <HowItWorks />
            <Impress />
            <Power />
        </main>
    )
};

export default Main;
