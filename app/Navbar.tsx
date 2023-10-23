import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='flex space-x-3 bg-slate-200 p-5 '>
			<Link
				href='/'
				className='mr-5'
			>
				{' '}
				Next js{' '}
			</Link>
			<Link
				href='/users'
				className='mr-5'
			>
				{' '}
				users{' '}
			</Link>
			<Link
				href='/api/auth/signin'
			>
				Login
			</Link>
		</div>
	);
};

export default Navbar;
