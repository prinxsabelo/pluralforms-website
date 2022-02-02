import React from 'react';
import Easy from './Easy';
import HowItWorks from './HowItWorks';
import Plural from './Plural';
import Power from './Power';
const Main = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Plural />
            <Easy />
            <HowItWorks />
            <Power />
        </main>
    )
};

export default Main;
