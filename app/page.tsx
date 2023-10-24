'use client'

// import Image from 'next/image';
// import snow from '@/public/images/Snow.jpg';
import { Metadata } from 'next';
import { useState } from 'react';
// import dynamic from 'next/dynamic';
import _ from 'loadash';
// const HeavyComponent = dynamic(
// 	()=> import('./components/HeavyComponent'),
// 	{
// 		ssr : false,
// 		loading: ()=> <p>Loading...</p>
// 	}
// )

export default function Home() {
	// const [isVisible, setVisible] = useState(false)
	return (
		<main className='relative h-screen'>
			<h1 className='font-poppins'>Hello World</h1>
			<button onClick={()=> {
				// const users = [
				// 	{name: 'c'},
				// 	{name: 'a'},
				// 	{name: 'b'},
				// ];
				// const sorted = _.orderBy(users, ['name']);
				// console.log(sorted);
			}}>Show</button>
			{/* {isVisible && <HeavyComponent />} */}
			{/* <Image
				src='https://bit.ly/react-cover'
				alt='Snow'
				fill
				className='object-cover'
				sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
				quality={100}
				priority
			/> */}
		</main>
	);
}

export async function genereteMetadata(): Promise<Metadata> {
	const product = await fetch('');

	return {
		title: 'product.title',
		description: 'product.description'
	}
}
