'use client';

import { ReactNode } from 'react';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

interface Props {
	children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
	const router = useRouter();
	return (
		<div className='flex '>
			<aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
			<Button
				text='users'
				onClick={() => router.push('/users')}
			/>
			<div>{children}</div>
		</div>
	);
};

export default AdminLayout;
