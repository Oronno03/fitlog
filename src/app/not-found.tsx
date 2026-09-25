import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[80vh] gap-3'>
            <h2 className='font-oswald text-[50px]'>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='border border-gray-500 px-3 py-2 rounded-full'>Return Home</Link>
        </div>
    );
};

export default NotFound;