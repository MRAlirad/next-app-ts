import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components';
import { CSSProperties } from 'react';

interface Props {
	name: string;
}

const WelcomTemplate = ({ name }: Props) => {
	return (
		<Html style={body}>
			<Preview>Welcome aboard</Preview>
			<Tailwind>
				<Body>
					<Container>
						<Text className='font-bold text-3xl'>Hello {name}</Text>
						<Link href='https://www.codewithmosh.com<'>www.codewithmosh.com</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

const body: CSSProperties = {
	background: '#fff',
};

const heading: CSSProperties = {
	fontSize: '32px',
};

export default WelcomTemplate;
