'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	const { status, data: session } = useSession();
	return (
		<div className='flex space-x-3 bg-slate-200 p-5 '>
			<Link
				href='/'
				className='mr-5'
			>
				Next js
			</Link>
			<Link
				href='/users'
				className='mr-5'
			>
				users
			</Link>
			{status === 'loading' && <div>Loading...</div>}
			{status === 'authenticated' && <div>{session.user!.name}</div>}
			{status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
		</div>
	);
};

export default Navbar;
