import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex items-center justify-between m-2.5 h-10 absolute w-full top-0 left-0'>
            <button>ChatGPT</button>
            <Link href={"/signin"}>Sign in</Link>
        </div>
    );
};

export default Header;
