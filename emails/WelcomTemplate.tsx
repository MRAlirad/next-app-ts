import { Html, Body, Container, Text, Link, Preview } from '@react-email/components';

interface Props {
    name : string;
}

const WelcomTemplate = ({name}: Props) => {
	return(
        <Html>
            <Preview>Welcome aboard</Preview>
            <Body>
                <Container>
                    <Text>Hello {name}</Text>
                    <Link href='https://www.codewithmosh.com<'>www.codewithmosh.com</Link>
                </Container>
            </Body>
        </Html>
    );
};

export default WelcomTemplate;
