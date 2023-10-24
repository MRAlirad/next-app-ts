import Image from 'next/image';
import snow from '@/public/images/Snow.jpg';

export default async function Home() {
	return (
		<main className='relative h-screen'>
			<h1 className='font-poppins'>Hello World</h1>
			<Image
				src='https://bit.ly/react-cover'
				alt='Snow'
				fill
				className='object-cover'
				sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
				quality={100}
				priority
			/>
		</main>
	);
}
